import { Request, Response, NextFunction } from "express";
import { createErrorResponse } from "@lib/responses"


class CountMiddleware {
    
    public parseCountBody(req: Request, res: Response, next: NextFunction): Response | void {
        if(req.params.id === undefined) {
            return createErrorResponse(res, "Parametro id es requerido", "Bad Request", 400)
        }


        next()
    }
    
}

export const countMiddleware = new CountMiddleware()