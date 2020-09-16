"use strict";

var router = require("../routes/notes.routes");

var notesCtrl = {}; // New note

notesCtrl.renderNoteForm = function (req, res) {
  res.send('note add');
};

notesCtrl.createNewNote = function (req, res) {
  res.send('new note');
}; // Get all notes


notesCtrl.renderNotes = function (req, res) {
  res.send('All notes');
}; // Edit notes


notesCtrl.renderEditForm = function (req, res) {
  res.send('Edit form');
};

notesCtrl.updateNote = function (req, res) {
  res.send('Note update');
}; // Delete note


notesCtrl.deleteNote = function (req, res) {
  res.send('Delete note');
};

module.exports = notesCtrl;