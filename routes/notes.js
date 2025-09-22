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
router.put('/updatenotes/:id', FetchUser, async (req, res) => {
    const { title, description, tag } = req.body;
    // create a newNote object
    try {
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") };
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed");

        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote, new: true });
        res.json({ note })
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Internal Server Error");
    }

})

// routes: 4
router.delete('/deletenotes/:id', FetchUser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") };

        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed");

        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been Deleted" });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Internal Server Error");
    }

})

module.exports = router; 