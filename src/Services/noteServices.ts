import { conflictError, forbiddenError, notFoundError } from "../Middlewares/errorHandler.js";
import { createNote, noteRepository } from "../Repositories/noteRepository.js";

async function createNewNote(newNote:createNote) {
    const { title, note, userId } = newNote;

    const userNoteFound = await noteRepository.findBytitleAndUser(title,userId);
    if (userNoteFound) throw conflictError("note already exists");

    const create = await noteRepository.createNote({ userId, title, note });
    return create;
}

async function findAllNotes(userId:number){
    return await noteRepository.findAllByUser(userId);
}

async function findOneNote(userId:number,id:number){
    const note = await noteRepository.findByIdAndUser(id,userId);
    if (!note) throw notFoundError("note not found");

    return note;
}

async function deleteNote(userId:number,id){
    const deletenote = await noteRepository.deleteNote(userId,id);
    if (!deletenote) throw forbiddenError("deleting request error");
    if (deletenote.count == 0) throw notFoundError("nothing to delete");

    return deletenote;
}

export const noteServices = {
    createNewNote,
    findAllNotes,
    findOneNote,
    deleteNote
}