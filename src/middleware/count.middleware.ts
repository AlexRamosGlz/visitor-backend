import { Request, Response, NextFunction } from "express";


class CountMiddleware {
    
    public parseCountBody(req: Request, res: Response, next: NextFunction): Response | void {
        if (typeof req.body !== "object" || req.body === null) {
            return res.status(400).json({
                message: "Invalid request body: expected an object",
                code: 400,
                error: "Bad Request"
            })
        }

        if(req.body.count === undefined || req.params.id === undefined) {
            return res.status(400).json({
                message: "Missing required field: count or id",
                code: 400,
                error: "Bad Request"
            })
        }


        next()
    }
    
}

export const countMiddleware = new CountMiddleware()