import { Request, Response, NextFunction, response } from "express";
import { createErrorResponse } from "@lib/responses"
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "@lib/constants/httpStatus";
import crypto from 'crypto'


class CountMiddleware {
    
    public parseCountCookie(req: Request, res: Response, next: NextFunction): Response | void {
        
        if(!req.cookies.countId) {
            return createErrorResponse(response, 'Cookie "countId" no propocionada', HTTP_STATUS_MESSAGES.BAD_REQUEST, HTTP_STATUS_CODES.BAD_REQUEST);
        }
        
        next()
    }
    
}

export const countMiddleware = new CountMiddleware()