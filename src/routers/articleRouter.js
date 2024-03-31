import { Router } from "express";
export const router = Router();
import { tryCatch } from "../middlewares/tryCatch.js";
import * as articleController from "../controllers/articleController.js";

router.get("/articles", tryCatch(articleController.getAllArticles));
router.get("/articles/:articleId", tryCatch(articleController.getOneArticle));
router.post("/articles", tryCatch(articleController.createArticle));
router.patch("/articles/:articleId", tryCatch(articleController.updateArticle));
router.delete(
  "/articles/:articleId",
  tryCatch(articleController.deleteArticle)
);
