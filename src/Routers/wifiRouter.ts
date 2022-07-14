import { Router } from "express";
import { createWifi, deleteWifi, getWifis } from "../Controllers/wifiController.js";
import validSchema from "../Middlewares/validateSchema.js";
import validToken from "../Middlewares/validateToken.js";
import { wifiSchema } from "../Schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.post("/user/wifi", validSchema(wifiSchema), validToken, createWifi);
wifiRouter.get("/user/wifi", validToken, getWifis);
wifiRouter.delete("/user/wifi/:id", validToken, deleteWifi);

export default wifiRouter;