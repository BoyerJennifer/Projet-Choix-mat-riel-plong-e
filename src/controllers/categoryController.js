import { Category } from "../models/associations.js";
import Joi from "joi";

export async function getAllCategories(req, res) {
  const categories = await Category.findAll({
    attributes: ["id", "name"],
    include: {
      association: "articles",
      attributes: ["title", "description"],
    },
  });
  res.json(categories);
}

export async function getOneCategory(req, res) {
  const id = +req.params.categoryId;

  if (!Number.isInteger(id)) {
    return res.status(404).json({ error: "Not found" });
  }

  const oneCategory = await Category.findByPk(id, {
    attributes: ["id", "name"],
    include: {
      association: "articles",
      attributes: ["title", "description"],
    },
  });

  if (!oneCategory) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json(oneCategory);
}

export async function createCategory(req, res) {
  const { name } = req.body;

  const createCategorySchema = Joi.object({
    name: Joi.string().min(1).max(255).required(),
  });

  const validationBody = createCategorySchema.validate({ name });

  if (validationBody.error) {
    return res.status(400).json({
      error:
        "The entry must be a text, cannot be an empty field, have at least one character long",
    });
  }

  const createdCategory = await Category.create({
    name,
  });

  res.status(201).json(createdCategory);
}

export async function updateCategory(req, res) {
  const id = +req.params.categoryId;

  if (!Number.isInteger(id)) {
    return res.status(404).json({ error: "Not found" });
  }

  const category = await Category.findByPk(id);

  if (!category) {
    return res.status(404).json({ error: "Not found" });
  }

  const { name } = req.body;

  const updateCategorySchema = Joi.object({
    name: Joi.string().min(1).max(255),
  });

  const validationBody = updateCategorySchema.validate({ name });

  if (validationBody.error) {
    return res.status(400).json({
      error:
        "The entry must be a text, cannot be an empty field, have at least one character long",
    });
  }

  category.name = name ?? category.name;

  await category.save();

  res.json(category);
}

export async function deleteCategory(req, res) {
  const id = req.params.categoryId;

  if (!Number.isInteger(id)) {
    return res.status(404).json({ error: "Not found" });
  }

  const category = await Category.findByPk(id);

  if (!category) {
    return res.status(404).json({ error: "Not found" });
  }

  await category.destroy();

  res.status(204).end();
}
