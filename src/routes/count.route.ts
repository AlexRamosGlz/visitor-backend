import { CountController } from "controllers/count";
import { Router, Request, Response } from "express";

export const countRouter = Router()

countRouter.get("/", (request: Request, response: Response) =>
    new CountController().get(request, response)
)

countRouter.post("/", (request: Request, response: Response) =>
    new CountController().post(request, response)
)

countRouter.get("/user", (request: Request, response: Response) =>
    new CountController().put(request, response)
)

countRouter.delete("/", (request: Request, response: Response) =>
    new CountController().delete(request, response)
)