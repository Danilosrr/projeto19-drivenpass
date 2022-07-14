import joi from "joi"
import { bodyWifi } from "../Repositories/wifiRepository.js";

export const wifiSchema = joi.object<bodyWifi>({
    name: joi.string().required(),
    network: joi.string().required(),
    password: joi.string().required(),
});