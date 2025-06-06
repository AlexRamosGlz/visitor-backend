import connectionConfig from "../utils/mysql.config.js";

import mysql from "mysql2/promise";
import "dotenv/config";
import { ErrorHandler } from "../middleware/ErrorHandler.js";

async function connect() {
  const baseLog = "[mysql.connect()]";

  try {
    const connection = await mysql.createConnection(
      connectionConfig[process.env.ENVIROMENT]
    );
    return connection;
  } catch (error) {
    ErrorHandler(baseLog, error);
    throw error;
  }
}

async function exec(query) {
  const baseLog = "[mysql.query()]";

  try {
    const connection = await connect();
    const [fields] = await connection.execute(query);

    return fields[0];
  } catch (error) {
    ErrorHandler(baseLog, error);
    throw error;
  }
}

export { connect, exec };
