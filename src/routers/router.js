import { Router } from "express";
export const router = Router();

import * as articleController from "../controllers/articleController.js";
import * as categoryController from "../controllers/categoryController.js";

router.get("/articles", articleController.getAllArticles);
router.get("/articles/:articleId", articleController.getOneArticle);
router.post("/articles", articleController.createArticle);
router.patch("/articles/:articleId", articleController.updateArticle);
router.delete("/articles/:articleId", articleController.deleteArticle);

router.get("/categories", categoryController.getAllCategories);
router.get("/categories/:categoryId", categoryController.getOneCategory);
router.post("/categories", categoryController.createCategory);
router.patch("/categories/:categoryId", categoryController.updateCategory);
router.delete("/categories/:categoryId", categoryController.deleteCategory);

router.use((req, res) => {
  res.status(404).json("Not found");
});
