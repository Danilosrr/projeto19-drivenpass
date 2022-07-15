import { Router } from "express";
import { createNote, deleteNote, getNotes, getOneNote } from "../Controllers/noteController.js";
import validSchema from "../Middlewares/validateSchema.js";
import validToken from "../Middlewares/validateToken.js";
import { noteSchema } from "../Schemas/noteSchema.js";

const noteRouter = Router();

noteRouter.post("/user/note", validSchema(noteSchema), validToken, createNote);
noteRouter.get("/user/note", validToken, getNotes);
noteRouter.get("/user/note/:id", validToken, getOneNote);
noteRouter.delete("/user/note/:id", validToken, deleteNote);

export default noteRouter;