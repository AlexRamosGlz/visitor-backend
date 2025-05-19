import { logger } from "../middleware/logger.js";
import response from "../middleware/response.js";
import { ERROR_CODES, SUCCES_CODES } from "../utils/constants.js";

/**
 *
 * @param {*} req
 * @param {*} res
 */
export async function get(req, res) {
  try {
    logger("message")
    response.succes(res, req.reqID, {count: 123},SUCCES_CODES.ok);
  } catch (error) {
    logger(error)
    response.error(res, req.reqID, null, ERROR_CODES.bad_request);
  }
}
