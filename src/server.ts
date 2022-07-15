import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import cors from "cors";
import userRouter from "./Routers/userRouter.js";
import handleErrors from "./Middlewares/errorHandler.js";
import wifiRouter from "./Routers/wifiRouter.js";
import credentialRouter from "./Routers/credentialRouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app. use(userRouter);
app.use(wifiRouter);
app.use(credentialRouter);
app.use(handleErrors);

const port = +process.env.PORT || 4000;
app.listen(port,() => {
    console.log(`server is listening on port ${port}`)
});