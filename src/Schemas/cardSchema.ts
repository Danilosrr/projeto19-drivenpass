import joi from "joi"
import { bodyCard } from "../Repositories/cardRepository.js";

export const cardSchema = joi.object<bodyCard>({
    title: joi.string().required(),
    number: joi.string().creditCard().required(),
    securityCode: joi.string().pattern(/^([0-9]{3})$/).required().messages({"string.pattern.base":"security Code format: XXX"}),
    expirationDate: joi.string().pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).required().messages({"string.pattern.base":"expiration Date format: MM/YY"}),
    password: joi.string().pattern(/^([0-9]{4})$/).required().messages({"string.pattern.base":"password format: XXXX"}),
    isVirtual: joi.boolean().required(),
    type: joi.string().valid("debit", "credit", "both")
});