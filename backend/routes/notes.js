const router = require("express").Router();
const Note = require("../models/notes");

// Create a new note
router.post("/addNote", async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      description: req.body.description,
      addedBy: req.body.userId,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a note
router.delete("/deleteNote/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a note
// Using PUT to update the entire note
router.put("/updateNote/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      { new: true } // This option returns the updated document
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all notes for a user
router.get("/notes/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const notes = await Note.find({ userId: userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
