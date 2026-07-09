import { useState } from "react";
import "./index.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Welcome",
      content: "This is your first note!",
      date: new Date().toLocaleString(),
    },
  ]);

  const addNote = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please enter both title and note.");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <h1>
        📒 <span>StudyNotes</span>
      </h1>

      <input
        type="text"
        placeholder="Enter Note Title"
        value={title}
        maxLength="50"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your note..."
        value={content}
        maxLength="500"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <p className="count">{content.length}/500 characters</p>

      <button className="add-btn" onClick={addNote}>
        Add Note
      </button>

      <div className="notes">
        {notes.map((note) => (
          <div className="note-card" key={note.id}>
            <h2>{note.title}</h2>

            <small>{note.date}</small>

            <p>{note.content}</p>

            <div className="btn-container">
              <button
                className="delete-btn"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer>
        © 2026 StudyNotes | Developed by Kaushiki Suryawanshi
      </footer>
    </div>
  );
}

export default App;