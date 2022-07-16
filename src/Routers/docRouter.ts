import { Router } from "express";
import { createDocument, deleteDocument, getDocuments } from "../Controllers/docController.js";
import validSchema from "../Middlewares/validateSchema.js";
import validToken from "../Middlewares/validateToken.js";
import { docSchema } from "../Schemas/docSchema.js";

const docRouter = Router();

docRouter.post("/user/doc", validSchema(docSchema), validToken, createDocument);
docRouter.get("/user/doc", validToken, getDocuments);
docRouter.get("/user/doc/:id", validToken, );
docRouter.delete("/user/doc/:id", validToken, deleteDocument);

export default docRouter;