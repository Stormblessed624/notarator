const router = require('express').Router();
const { notes } = require('../../db/db')
const { newNote } = require('../../newNote')

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    if (!req.body.id) {
        newNote(req.body, notes);
    } 

    res.json(req.body);
});



module.exports = router;