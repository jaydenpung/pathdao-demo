import { Sequelize } from "sequelize-typescript";
import { Footballer } from "./models/Footballer";
import * as dotenv from 'dotenv'

dotenv.config();

// Connect to the database
let sequelize: Sequelize = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "mysql"
});

sequelize.addModels([Footballer]);

// Module exports
export { sequelize, Sequelize };
export { Footballer };