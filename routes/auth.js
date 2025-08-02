const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

router.post('/', [
  body('name').isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
  body('email').isEmail().withMessage("Enter a valid email"),
  body('password').isLength({ min: 5 }).withMessage("Password must be at least 5 characters"),
], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if user already exists
    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });

  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
