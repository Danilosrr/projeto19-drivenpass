import { Request, Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { createNote } from "../Repositories/noteRepository.js";
import { token } from "../Repositories/userRepository.js";
import { noteServices } from "../Services/noteServices.js";

export async function createNote(req:Request, res:Response){
    const user:token = res.locals.token;
    const note:createNote = { ...req.body, userId:user.id };

    const createNote = await noteServices.createNewNote(note);
    res.send(createNote);
}

export async function getNotes(req:Request, res:Response){
    const user:token = res.locals.token;

    const userWifis = await noteServices.findAllNotes(user.id);

    res.send(userWifis);
}

export async function getOneNote(req:Request, res:Response){
    const id:number = +req.params.id;
    const user:token = res.locals.token;

    if ( isNaN(id) ) throw badRequestError("parametro invalido");

    const userNote = await noteServices.findOneNote(user.id,id);

    res.send(userNote);
}

export async function deleteNote(req:Request, res:Response){
    const id:number = +req.params.id
    const user:token = res.locals.token;

    if ( isNaN(id) ) throw badRequestError("parametro invalido");

    const deleteWifi = await noteServices.deleteNote(user.id,id);

    res.send(deleteWifi);
}