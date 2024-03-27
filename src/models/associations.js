import { Article } from "./article.js";
import { Category } from "./category.js";

// Category can have MANY Articles
// Articles cans have ONE Category
// One To Many

Category.hasMany(Article, {
  as: "articles",
  foreignKey: "category_id",
});

Article.belongsTo(Category, {
  as: "category",
  foreignKey: "category_id",
});

export { Category, Article };
