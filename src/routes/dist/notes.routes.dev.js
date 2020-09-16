"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../controllers/notes.controllers'),
    renderNoteForm = _require2.renderNoteForm,
    createNewNote = _require2.createNewNote,
    renderNotes = _require2.renderNotes,
    renderEditForm = _require2.renderEditForm,
    updateNote = _require2.updateNote,
    deleteNote = _require2.deleteNote; // New note


router.get('/notes/add', renderNoteForm);
router.post('/notes/add', createNewNote); // Get all notes

router.get('/notes', renderNotes); // Edit notes

router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id', updateNote); // Delete note

router["delete"]('/notes/delete/:id', deleteNote);
module.exports = router;