import { Article } from "../models/associations.js";

export async function getAllArticles(req, res) {
  const articles = await Article.findAll({
    attributes: ["id", "title", "description"],
  });
  res.json(articles);
}

export async function getOneArticle(req, res) {
  const articleId = req.params.articleId;

  const oneArticle = await Article.findByPk(articleId, {
    attributes: ["id", "title", "description"],
  });

  res.json(oneArticle);
}
