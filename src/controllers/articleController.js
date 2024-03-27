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

export async function updateArticle(req, res) {
  // trouver l'article a modifier = id
  const articleId = req.params.articleId;

  const article = await Article.findByPk(articleId);

  // Récupérer les données à modifier
  const { title, description, category_id } = req.body;

  // TODO to handle error if category doesn't exist
  // const categoryId = await Category.findByPk(category_id);

  // les update
  article.title = title ?? article.title;
  article.description = description ?? article.description;
  article.category_id = category_id ?? article.category_id;

  await article.save();

  res.json(article);
}

export async function deleteArticle(req, res) {
  const articleId = req.params.articleId;

  const article = await Article.findByPk(articleId);

  await article.destroy();

  res.status(204).end();
}
