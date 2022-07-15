import { Request,Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { createCredential } from "../Repositories/credentialRepository.js";
import { token } from "../Repositories/userRepository.js";
import { credentialService } from "../Services/credentialService.js";

export async function createCredential(req:Request, res:Response){
    const user:token = res.locals.token;
    const credential:createCredential = { ...req.body, userId:user.id };

    const createWifi = await credentialService.createNewCredential(credential);
    res.send(createWifi);
}

export async function getCredentials(req:Request, res:Response){
    const user:token = res.locals.token;

    const userWifis = await credentialService.findAllCredentials(user.id);
    res.send(userWifis);
}

export async function deleteCredential(req:Request, res:Response){
    const id:number = +req.params.id
    const user:token = res.locals.token;

    if ( isNaN(id) ) throw badRequestError("parametro invalido");

    const deleteCredential = await credentialService.deleteCredential(user.id,id);

    res.send(deleteCredential);
}