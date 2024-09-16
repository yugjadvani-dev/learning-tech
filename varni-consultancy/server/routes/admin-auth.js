const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// JWT secret
const JWT_SECRET = "event";

// Signup
router.post("/admin/signup", async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;
  try {
    await Admin.create({
      username,
      email,
      password,
    });
    res
      .status(201)
      .json({ success: true, message: "Admin registered successfully" });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Admin registration failed",
      error: err.message,
    });
  }
});

// Login
router.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Admin.findOne({ email });
    console.log("user", user);

    const newUser = {
      _id: user._id,
      username: user.username,
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

// Get Single Admin
router.get("/admin/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Admin.findById(id).select("-password"); // Exclude password from the response
    if (!user) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to retrieve user", error: err.message });
  }
});

// Edit Admin
router.put("/admin/:id", async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  try {
    const user = await Admin.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    // Update user details
    user.username = username || user.username;
    user.email = email || user.email;

    await user.save();

    res.status(200).json({ success: true, message: "Admin updated successfully", user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update user", error: err.message });
  }
});

// Delete Admin
router.delete("/admin/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Admin.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    await user.deleteOne();

    res.status(200).json({ success: true, message: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete user", error: err.message });
  }
});

module.exports = router;
