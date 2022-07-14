import { Router } from "express"
import { signIn, signUp } from "../Controllers/userController.js";
import validSchema from "../Middlewares/validateSchema.js";
import { userSchema } from "../Schemas/userSchema.js";

const userRouter = Router();

userRouter.post("/signup", validSchema(userSchema), signUp);
userRouter.post("/signin", validSchema(userSchema), signIn);

export default userRouter;