import { Router } from "express";

import getAll from "../controller/refController";

const refRotuer = Router();

refRotuer.get("/all", getAll);

export default refRotuer;
