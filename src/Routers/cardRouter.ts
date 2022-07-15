import { Router } from "express";
import { createCard, deleteCard, getCards, getOneCard } from "../Controllers/cardController.js";
import validSchema from "../Middlewares/validateSchema.js";
import validToken from "../Middlewares/validateToken.js";
import { cardSchema } from "../Schemas/cardSchema.js";

const cardRouter = Router();

cardRouter.post("/user/card", validSchema(cardSchema),validToken, createCard);
cardRouter.get("/user/card", validToken, getCards);
cardRouter.get("/user/card/:id", validToken, getOneCard);
cardRouter.delete("/user/card/:id", validToken, deleteCard);

export default cardRouter;