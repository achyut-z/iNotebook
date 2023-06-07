const express = require('express');
const fetchUser = require('../middleware/fetchuser');
const router = express.Router()
const Note = require('../models/Note')
const {body, validationResult} = require('express-validator')

//Route 1: To get all notes: GET /api/notes/notes //Login required
router.get('/notes', fetchUser, async (req, res) => {

    try {

        const notes = await Note.find({ user: req.user.id })
        res.json(notes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//Route 2: Add note: POST /api/notes/add-note Login required
router.post('/add-note', fetchUser, [
    body('title', 'Title must be atleast 3 characters').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {

    try {

        const { title, description, tag } = req.body

        //checking for errors
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();

        res.json(savedNote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }

})
module.exports = router