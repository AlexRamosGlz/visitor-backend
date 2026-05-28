import "reflect-metadata"
import { DataSource } from "typeorm"
import { Count } from "./entities/Count"
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
    entities: ['src/entities/*.ts'],
    migrations: [],
    subscribers: [],
}


export const AppDataSource = new DataSource({
    type: DATA_SOURCE_CONFIG.type as "postgres",
    host: DATA_SOURCE_CONFIG.host,
    port: DATA_SOURCE_CONFIG.port,
    username: DATA_SOURCE_CONFIG.username,
    password: DATA_SOURCE_CONFIG.password,
    database: DATA_SOURCE_CONFIG.database,
    synchronize: true,
    logging: false,
    entities: DATA_SOURCE_CONFIG.entities,
    migrations: [],
    subscribers: [],
})
