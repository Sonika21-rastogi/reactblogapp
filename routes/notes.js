const express = require('express');
const router = express.Router();
const FetchUser = require('../middleware/FetchUser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// route: 1
router.get('/fetchallnotes', FetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Internal Server Error");
    }

});
// route: 2
router.post('/addnotes', FetchUser, [
    body('title').isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
    body('description').isLength({ min: 5 }).withMessage("Description must be at least 5 characters"),], async (req, res) => {
    try {
        const { title, description, tag, } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote)
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Internal Server Error");
    }
});

// route: 3



module.exports = router; 