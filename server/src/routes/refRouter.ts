import { Router } from "express";

import { getAll, postChanges } from "../controller/refController";

const refRotuer = Router();

refRotuer.get("/all", getAll);

refRotuer.post("/save", postChanges);

export default refRotuer;
