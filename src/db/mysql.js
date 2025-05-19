import connectionConfig from "../utils/mysql.config";

import mysql from "mysql2/promise";
import "dotenv/config";


async function connect() {
  try {
    return await mysql.createConnection(connectionConfig[process.env.ENVIROMENT]);
  } catch (error) {

  }
}

async function exec(query) {
  try {
    return await connect().query(query);
  } catch (error) {}
}
