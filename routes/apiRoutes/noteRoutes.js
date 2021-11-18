const router = require('express').Router();
const { notes } = require('../../db/db')
const { newNote } = require('../../newNote')

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    if (!req.body.id) {
        res.json(req.body);
    } 
    newNote(req.body, notes);
    
});



module.exports = router;