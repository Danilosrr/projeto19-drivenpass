import { conflictError, forbiddenError, notFoundError } from "../Middlewares/errorHandler.js";
import { createUser, userRepository } from "../Repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signUpService(createUser:createUser){
    const { email } = createUser;
    const password = await bcrypt.hash(createUser.password,10);

    const conflict = await userRepository.findByEmail(email);
    if (conflict) throw conflictError("email already used");

    const signUp = await userRepository.createUser({ email, password });
}

async function signInService(createUser:createUser){
    const { email, password } = createUser;

    const emailFound = await userRepository.findByEmail(email);
    if (!emailFound) throw notFoundError("email not found");

    const passwordMatch = await bcrypt.compareSync(password, emailFound.password);
    if (!passwordMatch) throw forbiddenError("incorrect password");


    const token = jwt.sign(createUser, process.env.JWT_KEY);
    return token
}

export const userServices = {
    signInService,
    signUpService
}