import "dotenv/config";
import { Sequelize } from "sequelize";

// On initialise la connextion a la base de donnée via sequelize
export const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  logging: console.log,
});

await sequelize.authenticate();
