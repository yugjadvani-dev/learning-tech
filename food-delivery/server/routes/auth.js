const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// JWT secret
const JWT_SECRET = "event";

// Signup
router.post("/signup", async (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body;
  try {
    await User.create({
      name,
      email,
      password,
    });
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "User registration failed",
      error: err.message,
    });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log("user", user);

    const newUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    if (!user || !(await user.matchPassword(password))) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ success: true, token, user: newUser });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Login failed", error: err.message });
  }
});

// Get Single User
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select("-password"); // Exclude password from the response
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to retrieve user", error: err.message });
  }
});

// Edit User
router.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Update user details
    user.email = email || user.email;
    user.name = name || user.name;

    await user.save();

    res.status(200).json({ success: true, message: "User updated successfully", user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update user", error: err.message });
  }
});

// Delete User
router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    await user.deleteOne();

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete user", error: err.message });
  }
});

module.exports = router;
