import crypto from "node:crypto";

/**
 * Creates a request ID
 *
 * @param {*} req
 * @param {*} res
 */
export function reqID(req, res, next) {
  try {
    req.reqID = `${new Date().toISOString()} ${crypto.randomUUID()}`;
    return next()
  } catch (err) {
    console.error(err);
  }
}
