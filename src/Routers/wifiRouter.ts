import { Router } from "express";
import { createWifi } from "../Controllers/wifiController.js";
import validSchema from "../Middlewares/validateSchema.js";
import validToken from "../Middlewares/validateToken.js";
import { wifiSchema } from "../Schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.post("/wifi/create", validSchema(wifiSchema), validToken, createWifi);
wifiRouter.get("/wifi/get", );

export default wifiRouter;