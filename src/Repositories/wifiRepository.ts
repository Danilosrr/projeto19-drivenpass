import { Wifi } from "@prisma/client";
import { prisma } from "../database.js";

export type createWifi = Omit<Wifi,"id"|"createdAt">
export type bodyWifi = Omit<Wifi,"id"|"userId"|"createdAt">

async function findByNetworkAndUser(network:string,userId:number){
    return await prisma.wifi.findFirst({
        where: {network,userId}
    });
}

async function createWifi(createWifi:createWifi){
    return await prisma.wifi.create({ data:createWifi });
}

async function findAllByUser(userId:number){
    return await prisma.wifi.findMany({
        where: {userId}
    })
}

export const wifiRepository = {
    findByNetworkAndUser,
    findAllByUser,
    createWifi
}