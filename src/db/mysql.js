import connectionConfig from "../utils/mysql.config.js";

import mysql from "mysql2/promise";
import "dotenv/config";

async function connect() {
  try {
    const connection = await mysql.createConnection(
      connectionConfig[process.env.ENVIROMENT]
    );
    return connection;
  } catch (error) {
    console.error(error);
  }
}

async function exec(query) {
  try {
    const connection = await connect();
    const [fields] = await connection.execute(query);

    return fields[0];
  } catch (error) {
    console.error(error);
  }
}

export { connect, exec };
