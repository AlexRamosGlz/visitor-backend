import { CountController } from "controllers/count";
import { Router, Request, Response } from "express";
import { countMiddleware } from "@middleware/count.middleware";

export const countRouter = Router()

countRouter.get("/:id", (request: Request, response: Response) =>
    new CountController().get(request, response)
)

countRouter.post("/", countMiddleware.parseCountBody, (request: Request, response: Response) =>
    new CountController().post(request, response)
)

countRouter.patch("/:id", countMiddleware.parseCountBody, (request: Request, response: Response) =>
    new CountController().patch(request, response)
)

countRouter.delete("/", (request: Request, response: Response) =>
    new CountController().delete(request, response)
)