import { Request,Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { token } from "../Repositories/userRepository.js";
import { createWifi } from "../Repositories/wifiRepository.js";
import { wifiServices } from "../Services/wifiService.js";

export async function createWifi(req:Request, res:Response){
    const user:token = res.locals.token;
    const wifi:createWifi = { ...req.body, userId:user.id };

    const createWifi = await wifiServices.createNewWifi(wifi);
    res.send(createWifi);
}

export async function getWifis(req:Request, res:Response){
    const user:token = res.locals.token;

    const userWifis = await wifiServices.findAllWifis(user.id);

    res.send(userWifis);
}

export async function getOneWifi(req:Request, res:Response){
    const id:number = +req.params.id;
    const user:token = res.locals.token;

    if ( isNaN(id) ) throw badRequestError("parametro invalido");

    const userWifi = await wifiServices.findOneWifi(user.id,id);

    res.send(userWifi);
}

export async function deleteWifi(req:Request, res:Response){
    const id:number = +req.params.id
    const user:token = res.locals.token;

    if ( isNaN(id) ) throw badRequestError("parametro invalido");

    const deleteWifi = await wifiServices.deleteWifi(user.id,id);

    res.send(deleteWifi);
}