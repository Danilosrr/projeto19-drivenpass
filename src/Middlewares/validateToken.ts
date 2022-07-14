import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { unauthorizedError } from "./errorHandler.js";

export default function validToken(req:Request,res:Response,next:NextFunction){
    const { authorization } = req.headers;    
    const secretKey = process.env.JWT_KEY;

    const token = authorization?.replace("Bearer ", "").trim();
    if(!token) throw unauthorizedError("missing token")

    const user = jwt.verify(token, secretKey);
    if(!user) throw unauthorizedError("unauthorized token")

    res.locals.user = user;
    next();
}