import { exec } from "../db/mysql.js";
import { ErrorHandler } from "../middleware/ErrorHandler.js";
import response from "../middleware/response.js";
import { SUCCES_CODES, ERROR_CODES } from "../utils/constants.js";

/**
 *
 * @param {*} req
 * @param {*} res
 */
async function post(req, res) {
  const baseLog = "[post.post()]"

  try {
    const {browser} = req?.body;

    await exec(`INSERT INTO USERS (browser) VALUES ("${browser}")`);

    const count = await exec("SELECT COUNT(id) AS count FROM USERS");

    response.succes(res, req.reqID, count, SUCCES_CODES.created);
  } catch (error) {
    ErrorHandler(baseLog, error)
    response.error(res, req.reqID, error, ERROR_CODES.bad_request)
  }
}

export default post; 