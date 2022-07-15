import { prisma } from "../database.js";
import { Credential } from "@prisma/client";

export type createCredential = Omit<Credential,"id"|"createdAt">
export type bodyCredential = Omit<Credential,"id"|"userId"|"createdAt">

async function findByNameAndUser(name:string,userId:number){
    return await prisma.credential.findFirst({
        where: {name,userId}
    });
}

async function createCredential(createCredential:createCredential){
    return await prisma.credential.create({ data:createCredential });
}

async function findAllByUser(userId:number){
    return await prisma.credential.findMany({
        where: {userId}
    })
}

async function deleteCredential(userId:number,id:number){
    return await prisma.credential.deleteMany({
        where: {userId,id}
    });
}

export const CredentialRepository = {
    findByNameAndUser,
    createCredential,
    findAllByUser,
    deleteCredential
}