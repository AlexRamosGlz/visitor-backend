import crypto from "node:crypto";
import { logger } from "./logger.js";

/**
 * Creates a request ID
 *
 * @param {*} req
 * @param {*} res
 */
export function reqID(req, res, next) {
  try {
    req.reqID = `${new Date().toISOString()} ${crypto.randomUUID()}`;
    logger(req.reqID);
    return next()
  } catch (err) {
    console.error(err);
  }
}
