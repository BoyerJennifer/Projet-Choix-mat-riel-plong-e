import { Article } from "./Article.js";
import { Category } from "./Category.js";

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
