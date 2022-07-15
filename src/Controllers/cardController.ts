import { Request, Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { createCard } from "../Repositories/cardRepository.js";
import { token } from "../Repositories/userRepository.js";
import { cardService } from "../Services/cardService.js";

export async function createCard(req:Request,res:Response) {
    const user:token = res.locals.token;
    const card:createCard = { ...req.body, userId:user.id };

    const createCard = await cardService.createNewCard(card);
    res.send(createCard);
}

export async function getCards(req:Request, res:Response){
    const user:token = res.locals.token;

    const userCards = await cardService.findAllCards(user.id);
    res.send(userCards);
}

export async function getOneCard(req:Request, res:Response){
    const id:number = +req.params.id;
    const user:token = res.locals.token;

    if ( isNaN(id) ) throw badRequestError("parametro invalido");

    const userCard = await cardService.findOneCard(user.id,id);

    res.send(userCard);
}

export async function deleteCard(req:Request, res:Response){
    const id:number = +req.params.id
    const user:token = res.locals.token;

    if ( isNaN(id) ) throw badRequestError("parametro invalido");

    const deleteCard = await cardService.deleteCard(user.id,id);

    res.send(deleteCard);
}