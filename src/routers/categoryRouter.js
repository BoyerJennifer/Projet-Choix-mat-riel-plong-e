import { Router } from "express";
export const router = Router();
import * as categoryController from "../controllers/categoryController.js";
import { tryCatch } from "../middlewares/tryCatch.js";

router.get("/categories", tryCatch(categoryController.getAllCategories));
router.get(
  "/categories/:categoryId",
  tryCatch(categoryController.getOneCategory)
);
router.post("/categories", tryCatch(categoryController.createCategory));
router.patch(
  "/categories/:categoryId",
  tryCatch(categoryController.updateCategory)
);
router.delete(
  "/categories/:categoryId",
  tryCatch(categoryController.deleteCategory)
);
