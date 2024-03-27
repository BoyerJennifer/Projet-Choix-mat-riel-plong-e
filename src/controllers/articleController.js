import { Article } from "../models/associations.js";

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
  const articleId = req.params.articleId;

  const oneArticle = await Article.findByPk(articleId, {
    attributes: ["id", "title", "description"],
    include: {
      association: "category",
      attributes: ["id", "name"],
    },
  });

  res.json(oneArticle);
}

export async function createArticle(req, res) {
  const { title, description, category_id } = req.body;

  // TODO to handle error if category doesn't exist
  // const categoryId = await Category.findByPk(category_id);

  const createdArticle = await Article.create({
    title,
    description,
    category_id,
  });

  res.status(201).json(createdArticle);
}
