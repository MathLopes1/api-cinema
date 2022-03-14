import "reflect-metadata";
import Express  from "express";
import {router} from "./routes/routes";
import "./database/index.ts";

const app = Express();

app.use(Express.json());

app.use(router);

app.listen(process.env.PORT, () => console.log('application on port 3000'));