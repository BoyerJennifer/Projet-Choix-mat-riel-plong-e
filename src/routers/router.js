import { Router } from "express";
export const router = Router();

import * as articleController from "../controllers/articleController.js";
import * as categoryController from "../controllers/categoryController.js";

router.get("/articles", articleController.getAllArticles);
router.get("/articles/:articleId", articleController.getOneArticle);

router.get("/categories", categoryController.getAllCategories);

router.use((req, res) => {
  res.status(404).json("Not found");
});
