import { SUCCES_CODES, ERROR_CODES } from "../utils/constants.js";
import { reqID } from "./reqID.js";

const response = {
  /**
   *
   * @param {*} res
   * @param {*} content
   * @param {*} status
   * @returns
   */
  succes: function success(res, reqID, content, status = SUCCES_CODES.ok) {
    const response = {
      content,
      reqID,
    };

    return res.json(response).status(status);
  },

  /**
   *
   * @param {*} res
   * @param {*} content
   * @param {*} status
   * @returns
   */
  error: function error(res, reqID, content, status = ERROR_CODES.bad_request) {
    const response = {
      content,
      reqID,
    };

    return res.json(response).status(status);
  },
};

export default response;
