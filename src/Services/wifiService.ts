import { conflictError, forbiddenError, notFoundError } from "../Middlewares/errorHandler.js";
import { createWifi, wifiRepository } from "../Repositories/wifiRepository.js";
import bcrypt from "bcrypt";


async function createNewWifi(wifi:createWifi) {
    const { name, network, userId } = wifi;
    const password = await bcrypt.hash(wifi.password,10);

    const userNetworkFound = await wifiRepository.findByNetworkAndUser(network,userId);
    if (userNetworkFound) throw conflictError("network already exists");

    const create = await wifiRepository.createWifi({ userId, name, network, password });
    return create;
}

async function findAllWifis(userId:number){
    return await wifiRepository.findAllByUser(userId);
}

async function findOneWifi(userId:number,id:number){
    const wifi = await wifiRepository.findByIdAndUser(id,userId);
    if (!wifi) throw notFoundError("wifi not found");

    return wifi;
}

async function deleteWifi(userId:number,id){
    const deleteWifi = await wifiRepository.deleteWifi(userId,id);
    if (!deleteWifi) throw forbiddenError("deleting request error");
    if (deleteWifi.count == 0) throw notFoundError("nothing to delete");

    return deleteWifi;
}

export const wifiServices = {
    createNewWifi,
    findAllWifis,
    findOneWifi,
    deleteWifi
}