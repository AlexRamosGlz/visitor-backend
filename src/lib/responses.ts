import { Response } from "express";
import { IResponseSuccess, IResponseError } from "@interfaces/response";
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "@lib/constants/httpStatus";

export function createSuccessResponse<T>(response: Response, data: T, message: string = HTTP_STATUS_MESSAGES.OK, status: number = HTTP_STATUS_CODES.OK): Response<IResponseSuccess<T>> {
    return response.status(status).json(
        {
            data,
            message,
            code: status
        }
    );
}

export function createErrorResponse(response: Response, message: string, error: string, status: number = HTTP_STATUS_CODES.BAD_REQUEST): Response<IResponseError> {
    return response.status(status).json(
        {
            data: null,
            message,
            code: status,
            error
        }
    );
}
