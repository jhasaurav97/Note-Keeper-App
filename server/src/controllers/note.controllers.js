import { Note } from "../models/Note.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";

// ✅ Create Note
export const createNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user._id;

    if (!title || !content) {
        throw new ApiError(400, "All fields are required");
    }

    const note = await Note.create({ title, content, userId });

    return res.status(201).json(
        new ApiResponse(201, { note }, "Note created successfully")
    );
});

// ✅ Get all notes
export const getUserNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({ userId: req.user._id }).sort({ createdAt: -1 });

    return res.json(
        new ApiResponse(200, { notes }, "Fetched all notes successfully")
    );
});

// ✅ Update note
export const updateNote = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const note = await Note.findOneAndUpdate(
        { _id: id, userId: req.user._id },
        { title, content },
        { new: true }
    );

    if (!note) throw new ApiError(404, "Note not found");

    return res.json(
        new ApiResponse(200, { note }, "Note updated successfully")
    );
});

// ✅ Delete note
export const deleteNote = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const note = await Note.findOneAndDelete({ _id: id, userId: req.user._id });

    if (!note) throw new ApiError(404, "Note not found");

    return res.json(
        new ApiResponse(200, {}, "Note deleted successfully")
    );
});
