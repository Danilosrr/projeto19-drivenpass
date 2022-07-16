import { Request, Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { createDoc } from "../Repositories/docRepository.js";
import { token } from "../Repositories/userRepository.js";
import { documentService } from "../Services/docService.js";

export async function createDocument(req:Request, res:Response){
    const user:token = res.locals.token;
    const document:createDoc = { ...req.body, userId:user.id };

    const createDocument= await documentService.createNewDoc(document);
    res.send(createDocument);
}

export async function getDocuments(req:Request, res:Response){
    const user:token = res.locals.token;

    const userDocuments = await documentService.findAllDocuments(user.id);
    res.send(userDocuments);
}

export async function getOneDocument(req:Request, res:Response){
    const id:number = +req.params.id;
    const user:token = res.locals.token;

    if ( isNaN(id) ) throw badRequestError("parametro invalido");

    const userNote = await documentService.findOneDocument(user.id,id);

    res.send(userNote);
}

export async function deleteDocument(req:Request, res:Response){
    const id:number = +req.params.id
    const user:token = res.locals.token;

    if ( isNaN(id) ) throw badRequestError("parametro invalido");

    const deleteDocument = await documentService.deleteDocument(user.id,id);

    res.send(deleteDocument);
}