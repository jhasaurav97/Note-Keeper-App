import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";
import api from "../api/api.js";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteData, setNoteData] = useState({ title: "", content: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch all user notes
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await api.get(`${import.meta.env.VITE_API_URL}/notes`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      setNotes(res.data.data.notes || []);
      console.log(res.data.data);
    } catch (err) {
      console.error("Error fetching notes:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // ✅ Create / Update Note
  const handleSave = async () => {
    if (!noteData.title || !noteData.content)
      return alert("All fields are required!");
    
    const token = localStorage.getItem("token");
    try {
      if (editId) {
        // 🟦 Update existing note
        const res = await api.put(
          `${import.meta.env.VITE_API_URL}/notes/${editId}`,
          noteData,
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }
        );
        const updatedNote = res.data.data.note || res.data.data;

        setNotes((prev) =>
          prev.map((n) => (n._id === editId ? updatedNote : n))
        );
      } else {
        // 🟩 Create new note
        const res = await api.post(`${import.meta.env.VITE_API_URL}/notes`, noteData,
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true
          });
        const newNote = res.data.data.note || res.data.data;

        setNotes((prev) => [...prev, newNote]);
      }

      // 🧹 Reset form
      setNoteData({ title: "", content: "" });
      setEditId(null);
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error saving note:", err.response?.data || err.message);
    }
  };

  // ✅ Edit Note
  const handleEdit = (note) => {
    setNoteData({ title: note.title, content: note.content });
    setEditId(note._id);
    setIsModalOpen(true);
  };

  // ✅ Delete Note
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this note?")) return;
    const token = localStorage.getItem("token");
    try {
      await api.delete(`${import.meta.env.VITE_API_URL}/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      setNotes((prev) => prev.filter((n) => n._id !== id));
    } catch (err) {
      console.error("Error deleting note:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
          >
            <Plus size={18} /> Add Note
          </button>
        </div>

        {/* Notes Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading notes...</p>
        ) : notes.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {notes.map((note) => (
              <div
                key={note._id}
                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 border border-gray-200 dark:border-gray-700 transition"
              >
                <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {note.content}
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => handleEdit(note)}
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No notes found. Create your first note!
          </p>
        )}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-[90%] sm:w-[400px] shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editId ? "Edit Note" : "Add Note"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter title"
              value={noteData.title}
              onChange={(e) =>
                setNoteData({ ...noteData, title: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg bg-gray-50 dark:bg-gray-700"
            />
            <textarea
              placeholder="Enter content"
              rows={5}
              value={noteData.content}
              onChange={(e) =>
                setNoteData({ ...noteData, content: e.target.value })
              }
              className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700"
            />
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4 cursor-pointer"
            >
              {editId ? "Update" : "Save"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
