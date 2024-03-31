import "dotenv/config";

import express from "express";

import { router } from "./src/routers/router.js";
import { error404 } from "./src/middlewares/error404.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.use(error404);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
