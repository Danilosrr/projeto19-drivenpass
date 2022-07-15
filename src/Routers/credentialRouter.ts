import { Router } from "express"
import { createCredential, deleteCredential, getCredentials, getOneCredential } from "../Controllers/credentialController.js";
import { credentialSchema } from "../Schemas/credentialSchema.js";
import validSchema from "../Middlewares/validateSchema.js";
import validToken from "../Middlewares/validateToken.js";

const credentialRouter = Router();

credentialRouter.post("/user/credential", validSchema(credentialSchema), validToken, createCredential);
credentialRouter.get("/user/credential", validToken, getCredentials);
credentialRouter.get("/user/credential/:id", validToken, getOneCredential);
credentialRouter.delete("/user/credential/:id", validToken, deleteCredential);

export default credentialRouter;