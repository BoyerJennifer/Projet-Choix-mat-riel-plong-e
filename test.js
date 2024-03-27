import { Category, Article } from "./src/models/associations.js";

test();

async function test() {
  const categories = await Category.findAll({ attributes: ["name"] });
  console.log(categories.map((category) => category.toJSON()));

  const articles = await Article.findAll({
    attributes: ["title", "description", "category_id"],
  });
  console.log(articles.map((article) => article.toJSON()));

  const category = await Category.findByPk(1, {
    attributes: ["name"],
    include: {
      association: "articles",
      attributes: ["title", "description"],
    },
  });
  console.log(category.toJSON());
}
