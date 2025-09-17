const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const FetchUser  = require('../middleware/FetchUser');
require('dotenv').config();

// ROUTE:1 Register a user
router.post('/createuser', [
  body('name').isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
  body('email').isEmail().withMessage("Enter a valid email"),
  body('password').isLength({ min: 5 }).withMessage("Password must be at least 5 characters"),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    await user.save();

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, process.env.JWT_SECRET);

    res.status(201).json({ authToken, message: "User created successfully" });

  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Internal Server Error");
  }
});

// ROUTE:2 Login a user
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ authToken, message: "Login successful" });

  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Internal Server Error");
  }
});

// ROUTE:3 Get logged-in user details (Protected)
router.post('/getuser', FetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
