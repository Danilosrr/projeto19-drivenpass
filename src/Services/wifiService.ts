import { conflictError } from "../Middlewares/errorHandler.js";
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

export const wifiServices = {
    createNewWifi,
}