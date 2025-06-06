import response from "../middleware/response.js";
import { ERROR_CODES, SUCCES_CODES } from "../utils/constants.js";
import { exec } from "../db/mysql.js";
import { ErrorHandler } from "../middleware/ErrorHandler.js";

/**
 *
 * @param {*} req
 * @param {*} res
 */
export async function get(req, res) {
  const baseLog = "[get.get()]"

  try {
    const count = await exec("SELECT COUNT(id) AS count FROM USERS");
    return response.succes(res, req.reqID, count, SUCCES_CODES.ok);
  } catch (error) {
    return response.error(res, req.reqID, error, ERROR_CODES.bad_request);
  }
}
