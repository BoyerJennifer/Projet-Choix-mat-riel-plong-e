import { Article, Category } from "../models/associations.js";
import Joi from "joi";

export async function getAllArticles(req, res) {
  const articles = await Article.findAll({
    attributes: ["id", "title", "description"],
    include: {
      association: "category",
      attributes: ["id", "name"],
    },
  });
  res.json(articles);
}

export async function getOneArticle(req, res) {
  const id = +req.params.articleId;

  if (!Number.isInteger(id)) {
    return res.status(404).json({ error: "Not found" });
  }

  const oneArticle = await Article.findByPk(id, {
    attributes: ["id", "title", "description"],
    include: {
      association: "category",
      attributes: ["id", "name"],
    },
  });

  if (!oneArticle) {
    return res.status(404).json({ error: "Not found" });
  }
  res.json(oneArticle);
}

export async function createArticle(req, res) {
  const { title, description, category_id } = req.body;

  const createArticleSchema = Joi.object({
    title: Joi.string()
      .required()
      .min(1)
      .max(255)
      .error(
        () =>
          new Error(
            "The entry must be a string, not an empty field, have at least one character"
          )
      ),
    description: Joi.string()
      .required()
      .min(1)
      .error(
        () =>
          new Error(
            "The entry must be a string, not an empty field, have at least one character"
          )
      ),
    category_id: Joi.number()
      .integer()
      .required()
      .greater(0)
      .error(
        () => new Error("The category ID must be an integer greater than zero")
      ),
  });

  const validationBody = createArticleSchema.validate(req.body, {
    abortEarly: false,
  });

  if (validationBody.error) {
    return res.status(400).json({ error: validationBody.error.message });
  }

  const categoryId = await Category.findByPk(category_id);

  if (!categoryId) {
    return res.status(404).json({ error: "Not found" });
  }

  const createdArticle = await Article.create({
    title,
    description,
    category_id,
  });

  res.status(201).json(createdArticle);
}

export async function updateArticle(req, res) {
  const id = +req.params.articleId;

  if (!Number.isInteger(id)) {
    return res.status(404).json({ error: "Not found" });
  }

  const article = await Article.findByPk(id);

  if (!article) {
    return res.status(404).json({ error: "Not found" });
  }

  const { title, description, category_id } = req.body;

  const updateArticleSchema = Joi.object({
    title: Joi.string()
      .min(1)
      .max(255)
      .error(
        () =>
          new Error(
            "The entry must be a string, not an empty field, have at least one character"
          )
      ),
    description: Joi.string()
      .min(1)
      .error(
        () =>
          new Error(
            "The entry must be a string, not an empty field, have at least one character"
          )
      ),
    category_id: Joi.number()
      .integer()
      .greater(0)
      .error(
        () => new Error("The category ID must be an integer greater than zero")
      ),
  });

  const validationBody = updateArticleSchema.validate(req.body, {
    abortEarly: false,
  });

  if (validationBody.error) {
    return res.status(400).json({ error: validationBody.error.message });
  }

  const categoryId = await Category.findByPk(category_id);

  if (!categoryId) {
    return res.status(404).json({ error: "Not found" });
  }

  article.title = title ?? article.title;
  article.description = description ?? article.description;
  article.category_id = category_id ?? article.category_id;

  await article.save();

  res.json(article);
}

export async function deleteArticle(req, res) {
  const id = +req.params.articleId;

  if (!Number.isInteger(id)) {
    return res.status(404).json({ error: "Not found" });
  }

  const article = await Article.findByPk(id);

  if (!article) {
    return res.status(404).json({ error: "Not found" });
  }

  await article.destroy();

  res.status(204).end();
}
