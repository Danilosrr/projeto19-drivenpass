import joi from "joi"
import { createUser } from "../Repositories/userRepository.js";

export const userSchema = joi.object<createUser>({
    email: joi.string().email().required(),
    password: joi.string().required().min(10),
});