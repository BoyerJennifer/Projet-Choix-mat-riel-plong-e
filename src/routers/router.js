import { Router } from "express";
export const router = Router();

import { router as articleRouter } from "./articleRouter.js";
import { router as categoryRouter } from "./categoryRouter.js";

router.use(articleRouter);
router.use(categoryRouter);
