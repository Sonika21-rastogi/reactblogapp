const express = require('express');
const router = express.Router();
const FetchUser  = require('../middleware/FetchUser');
const Notes = require('../models/Notes');

router.get('/fetchallnotes', FetchUser, async(req, res) => {
    const notes = await Notes.find({user: req.user});
    res.json(notes)
});

module.exports = router;    