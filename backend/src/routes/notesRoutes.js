import express from "express";
import { getAllNotes,createNotes,updateNotes,deleteNotes,getAllNotesById } from "../controllers/notesController.js";

const router = express.Router();

router.get("/",getAllNotes);
router.get("/:id",getAllNotesById);
router.post("/",createNotes);
router.put("/:id",updateNotes);
router.delete("/:id",deleteNotes);

export default router;