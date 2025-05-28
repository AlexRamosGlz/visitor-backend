import { Router } from "express";
import { get } from "../services/get.js";
import post from "../services/post.js";
import response from "../middleware/response.js";
import { ERROR_CODES } from "../utils/constants.js";


const router = Router();

// GET
router.get('/', get)

// POST
router.post('/', post)

// DEFAULT
router.get('*', (req, res) => {
    return response.error(res, req?.reqID, "Unkown path", ERROR_CODES.bad_request)
})

export default router;