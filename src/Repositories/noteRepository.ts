import { prisma } from "../database.js";
import { Note } from "@prisma/client";

export type createNote = Omit<Note,"id"|"createdAt">
export type bodyNote = Omit<Note,"id"|"userId"|"createdAt">

async function findBytitleAndUser(title:string,userId:number){
    return await prisma.note.findFirst({
        where: {title,userId}
    });
}

async function createNote(createNote:createNote){
    return await prisma.note.create({ data:createNote });
}

async function findAllByUser(userId:number){
    return await prisma.note.findMany({
        where: {userId}
    })
}

async function findByIdAndUser(id:number,userId:number){
    return await prisma.note.findFirst({
        where: {id,userId}
    })
}

async function deleteNote(userId:number,id:number){
    return await prisma.note.deleteMany({
        where: {userId,id}
    });
}

export const NoteRepository = {
    findBytitleAndUser,
    createNote,
    findAllByUser,
    deleteNote
}