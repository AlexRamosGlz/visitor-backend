import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/Count"
import 'dotenv/config';

const DATA_SOURCE_CONFIG = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
}


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "",
    password: "password",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
