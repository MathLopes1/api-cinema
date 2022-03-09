import "reflect-metadata";
import Express  from "express";
import "./database/index.ts";

const app = Express()
app.listen(3000, () => console.log('application on port 3000'))