// routes/userRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs"); // To hash the password before saving it
const User = require("../models/User"); // Import the User model

const router = express.Router();

// User registration route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  
  try {
    
    const newUser = new User({
      email,
      password
    });

    // Save the user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({
      message: "User created successfully",
      
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
