import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

export class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "category",
  }
);
