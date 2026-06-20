import { CountController } from "controllers/count";
import { Router, Request, Response } from "express";
import { countMiddleware } from "@middleware/count.middleware";

export const countRouter = Router()

countRouter.get("/", countMiddleware.parseCountCookie,(request: Request, response: Response) =>
    new CountController().get(request, response)
)

countRouter.post("/", (request: Request, response: Response) =>
    new CountController().post(request, response)
)

countRouter.patch("/", countMiddleware.parseCountCookie, (request: Request, response: Response) =>
    new CountController().patch(request, response)
)

countRouter.delete("/", (request: Request, response: Response) =>
    new CountController().delete(request, response)
)