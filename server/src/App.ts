import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import refRouter from "./routes/refRouter";

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/ref", refRouter);

app.listen(4000);
