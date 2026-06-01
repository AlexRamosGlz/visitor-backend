import { Request, Response, NextFunction } from "express";
import { createErrorResponse } from "@lib/responses"
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "@lib/constants/httpStatus";
import crypto from 'crypto'


class CountMiddleware {
    
    public parseCountBody(req: Request, res: Response, next: NextFunction): Response | void {
        if(!req.ip) {
            return createErrorResponse(res, "IP address unavailable", HTTP_STATUS_MESSAGES.BAD_REQUEST, HTTP_STATUS_CODES.BAD_REQUEST);
        }

        const hmac = crypto.createHmac("sha256", process.env.SECRET!)
        hmac.update(req.ip);
        const hash = hmac.digest('hex');
        req.body.hashedIp = hash;
        
        next()
    }
    
}

export const countMiddleware = new CountMiddleware()