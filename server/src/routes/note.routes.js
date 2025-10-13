import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createNote, deleteNote, getUserNotes, updateNote } from "../controllers/note.controllers.js";

const router = Router();

router.use(verifyJWT);

// Create Note
router.post("/", createNote);

// Get All Notes
router.get("/", getUserNotes);

// Update Note
router.put("/:id", updateNote);

// Delete Note
router.delete("/:id", deleteNote);

export default router;