import { Router } from "express"
import { countRouter } from "@routes/count.route"


const router = Router()

// Count Routes
router.use("/count", countRouter)

export default router
