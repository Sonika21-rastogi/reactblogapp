    const express = require('express');
    const User = require('../models/User');
    const router = express.Router();
    const { body, validationResult} = require('express-validator');


    router.post('/',[
        body('name').isLength()({min:3}).withMessage("Name must be at least 3 characters"),
        body('email').isEmail().withMessage("Enter a valid email"),
        body('password').isLength()({min:5}).withMessage("Password must be at least 5 characters")
    ], (req, res) => {
 const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
        res.send(req.body);

    })


    module.exports = router;    