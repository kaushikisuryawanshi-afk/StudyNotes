const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// In-memory notes array
let notes = [
  {
    id: 1,
    title: "Welcome",
    content: "This is your first note!"
  }
];

// Get all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// Add note
app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;

  const newNote = {
    id: Date.now(),
    title,
    content,
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// Update note
app.put("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  notes = notes.map(note =>
    note.id === id ? { ...note, title, content } : note
  );

  res.json({ message: "Note updated" });
});

// Delete note
app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  notes = notes.filter(note => note.id !== id);

  res.json({ message: "Note deleted" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});