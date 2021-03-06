import { Users } from "@prisma/client";
import { prisma } from "../database.js";

export type createUser = Omit<Users,"id"|"createdAt">
export type token = {
    id: number
    email: string
    password: string
    iat: number
}

async function findByEmail(email:string){
    return await prisma.users.findFirst({
        where: {email}
    });
}

async function createUser(createUser:createUser){
    return await prisma.users.create({ data:createUser });
}

export const userRepository = {
    findByEmail,
    createUser
}