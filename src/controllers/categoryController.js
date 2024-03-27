import { Category } from "../models/associations.js";

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
  const categoryId = req.params.categoryId;

  const oneCategory = await Category.findByPk(categoryId, {
    attributes: ["id", "name"],
    include: {
      association: "articles",
      attributes: ["title", "description"],
    },
  });

  res.json(oneCategory);
}

export async function createCategory(req, res) {
  const { name } = req.body;

  const createdCategory = await Category.create({
    name,
  });

  res.status(201).json(createdCategory);
}

export async function updateCategory(req, res) {
  // trouver l'article a modifier = id
  const categoryId = req.params.categoryId;

  const category = await Category.findByPk(categoryId);

  // Récupérer les données à modifier
  const { name } = req.body;

  // les update
  category.name = name ?? category.name;

  await category.save();

  res.json(category);
}

export async function deleteCategory(req, res) {
  const categoryId = req.params.categoryId;

  const category = await Category.findByPk(categoryId);

  await category.destroy();

  res.status(204).end();
}
