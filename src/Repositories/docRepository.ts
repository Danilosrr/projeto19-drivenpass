import { Document } from "@prisma/client";
import { prisma } from "../database.js";

export type createDoc = Omit<Document,"id">
export type bodyDoc = Omit<Document,"id"|"userId">

async function findByTitleAndUser(title:string,userId:number){
    return await prisma.document.findFirst({
        where: {title,userId}
    });
}

async function createDoc(createDoc:createDoc){
    return await prisma.document.create({ data:createDoc });
}

async function findAllByUser(userId:number){
    return await prisma.document.findMany({
        where: {userId}
    })
}

async function findByIdAndUser(id:number,userId:number){
    return await prisma.document.findFirst({
        where: {id,userId}
    })
}

async function deleteDoc(userId:number,id:number){
    return await prisma.document.deleteMany({
        where:{userId,id}
    });
}

export const documentRepository = {
    findByTitleAndUser,
    createDoc,
    findAllByUser,
    findByIdAndUser,
    deleteDoc
}