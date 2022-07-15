import joi from "joi"
import { bodyCredential } from "../Repositories/credentialRepository.js";

export const credentialSchema = joi.object<bodyCredential>({
    name: joi.string().required(),
    url: joi.string().uri().required(),
    username: joi.string().required(),
    password: joi.string().required()
});