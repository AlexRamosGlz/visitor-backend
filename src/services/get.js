import { logger } from "../middleware/logger.js";
import response from "../middleware/response.js";
import { ERROR_CODES, SUCCES_CODES } from "../utils/constants.js";
import { exec } from "../db/mysql.js";

/**
 *
 * @param {*} req
 * @param {*} res
 */
export async function get(req, res) {
  try {
    logger("message");
    const query = await exec("SELECT COUNT(id) AS count FROM USERS");
    response.succes(res, req.reqID, query, SUCCES_CODES.ok);
  } catch (error) {
    logger(error);
    response.error(res, req.reqID, null, ERROR_CODES.bad_request);
  }
}
