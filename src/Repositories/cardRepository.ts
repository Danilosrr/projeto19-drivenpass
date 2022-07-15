import { Card } from "@prisma/client";
import { prisma } from "../database.js";

export type createCard = Omit<Card,"id"|"createdAt">
export type bodyCard = Omit<Card,"id"|"userId"|"createdAt">

async function findByTitleAndUser(title:string,userId:number){
    return await prisma.card.findFirst({
        where: {title,userId}
    });
}

async function createCard(createWifi:createCard){
    return await prisma.card.create({ data:createWifi });
}

async function findAllByUser(userId:number){
    return await prisma.card.findMany({
        where: {userId}
    })
}

async function findByIdAndUser(id:number,userId:number){
    return await prisma.card.findFirst({
        where: {id,userId}
    })
}

async function deleteCard(userId:number,id:number){
    return await prisma.card.deleteMany({
        where:{userId,id}
    });
}

export const cardRepository = {
    findByTitleAndUser,
    findAllByUser,
    findByIdAndUser,
    deleteCard,
    createCard
}