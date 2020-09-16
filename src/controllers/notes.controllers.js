const notesCtrl = {};

const Note = require('../models/Note');

// New note
notesCtrl.renderNoteForm = (req, res) => {
    console.log(req.user.id);
    res.render('notes/new-note');
};
notesCtrl.createNewNote = async (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;
    const newNote = new Note({
        title,
        description
    });
    newNote.user = req.user.id;
    console.log(newNote);
    await newNote.save();
    req.flash('success_msg', 'Note Added Succesfully');
    res.redirect('/notes');
};

// Get all notes
notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'});
    res.render('notes/all-notes', { notes });
};

// Edit notes
notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (note.user != req.user.is) {
        req.flash('error_msg', 'Not Authorized');
        return res.redirect('/notes');
    };
    console.log(note);
    res.render('notes/edit-note', { note });
};
notesCtrl.updateNote = async (req, res) => {
    const { title, description } = req.body;
    if (note.user != req.user.is) {
        req.flash('error_msg', 'Not Authorized');
        return res.redirect('/notes');
    };
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg', 'Note Update Succefully');
    res.redirect('/notes');
};

// Delete note
notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    if (note.user != req.user.is) {
        req.flash('error_msg', 'Not Authorized');
        return res.redirect('/notes');
    };
    req.flash('success_msg', 'Note Delete Succefully');
    res.redirect('/notes')
};



module.exports = notesCtrl;