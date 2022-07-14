import { Request,Response } from "express";
import { token } from "../Repositories/userRepository.js";
import { createWifi } from "../Repositories/wifiRepository.js";
import { wifiServices } from "../Services/wifiService.js";

export async function createWifi(req:Request, res:Response){
    const user:token = res.locals.token;
    const wifi:createWifi = { ...req.body, userId:user.id };

    const createWifi = await wifiServices.createNewWifi(wifi);
    res.send(createWifi);
}