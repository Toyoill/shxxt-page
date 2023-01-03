import express from "express";
import bodyParser from "body-parser";

import refRouter from "./routes/refRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);
