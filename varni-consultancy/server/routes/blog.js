const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// Add Blog
router.post("/add-blog", async (req, res) => {
  const {
    title,
    content,
    author,
    date,
    category
  } = req.body;
  try {
    await Blog.create({
      title,
      content,
      author,
      date,
      category
    });
    res
      .status(201)
      .json({ success: true, message: "Blog registered successfully" });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Blog registration failed",
      error: err.message,
    });
  }
});

// Get All Blogs
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find(); // Retrieve all blogs from the database
    if (blogs.length === 0) {
      return res.status(404).json({ success: false, message: "No blogs found" });
    }
    res.status(200).json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to retrieve blogs", error: err.message });
  }
});

// Get Single Blog
router.get("/blog/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id); // Exclude password from the response
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to retrieve blog", error: err.message });
  }
});

// Edit Blog
router.put("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const { title,
    content,
    author,
    date,
    category } = req.body;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    // Update blog details
    // blog.username = username || blog.username;
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.author = author || blog.author;
    blog.date = date || blog.date;
    blog.category = category || blog.category;

    await blog.save();

    res.status(200).json({ success: true, message: "Blog updated successfully", blog });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update blog", error: err.message });
  }
});

// Delete Blog
router.delete("/blog/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    await blog.deleteOne();

    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete blog", error: err.message });
  }
});

module.exports = router;
