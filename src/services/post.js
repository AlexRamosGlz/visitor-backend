import { logger } from "../middleware/logger.js";
import response from "../middleware/response.js";
import { SUCCES_CODES, ERROR_CODES } from "../utils/constants.js";

/**
 *
 * @param {*} req
 * @param {*} res
 */
function post(req, res) {
  try {
    const { count } = req.body;

    const log = `[get()];payload: ${count};[status: ${SUCCES_CODES.ok}]`

    logger(count)

    response.succes(res, req.reqID, count + 1, SUCCES_CODES.created);
  } catch (error) {
    const log = `[get()];[error: ${error}];[status: ${ERROR_CODES.bad_request}]`
    logger(error)
    response.error(res, req.reqID, {message: 'Error'},ERROR_CODES.bad_request)
  }
}

export default post;