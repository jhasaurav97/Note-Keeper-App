import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createNote, deleteNote, getUserNotes, updateNote } from "../controllers/note.controllers.js";

const router = Router();

router.use(verifyJWT);

router.post("/", createNote);
router.get("/", getUserNotes);
router.put("/", updateNote);
router.delete("/", deleteNote);

export default router;