import joi from "joi"
import { bodyDoc } from "../Repositories/docRepository.js";

export const docSchema = joi.object<bodyDoc>({
    title: joi.string().required(),
    number: joi.string().creditCard().required(),
    completeName: joi.string().required(),
    issuingBody: joi.string().required(),
    emissionDate: joi.string().pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).required().messages({"string.pattern.base":"Emission date format: MM/YY"}),
    expirationDate: joi.string().pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).required().messages({"string.pattern.base":"Expiration date format: MM/YY"}),
    type: joi.string().valid("RG", "CNH")
});