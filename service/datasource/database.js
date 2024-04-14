import { Sequelize } from "sequelize";
import env from "../config/env.js";

const dbConfig = new Sequelize(
    env.DB_NAME,
    env.DB_USERNAME,
    env.DB_PASSWORD,
    {
        host: env.DB_HOST,
        dialect: "mysql",
        port: parseInt(env.DB_PORT),
        logging: false,
        pool: {
            max: 2,
            min: 0,
            acquire: 3000,
            idle: 0
        },
        define: {
            freezeTableName: true
        }
    }
);

export default dbConfig;
