import { ErrorHandler } from "../middleware/ErrorHandler.js";
import response from "../middleware/response.js";
import { SUCCES_CODES, ERROR_CODES } from "../utils/constants.js";

/**
 *
 * @param {*} req
 * @param {*} res
 */
function post(req, res) {
  const baseLog = "[post.post()]"

  try {
    const { count } = req.body;
    response.succes(res, req.reqID, count + 1, SUCCES_CODES.created);
    asd
  } catch (error) {
    ErrorHandler(baseLog, error)
    response.error(res, req.reqID, {message: 'Error'},ERROR_CODES.bad_request)
  }
}

export default post; 