import { Router } from "express";

import {
  getAll,
  postChanges,
  getArticle,
  postArticle,
} from "../controller/refController";

const refRotuer = Router();

refRotuer.get("/all", getAll);

refRotuer.post("/save", postChanges);

refRotuer.get("/article/:contentId", getArticle);

refRotuer.post("/article/:contentId", postArticle);

export default refRotuer;
