import { Response } from "express";
import { IResponseSuccess, IResponseError } from "@interfaces/response";

export function createSuccessResponse<T>(response: Response, data: T, message: string = "Success", status: number = 200): Response<IResponseSuccess<T>> {

    return response.status(status).json(
        {
            data,
            message,
            code: status
        }
    );
}

export function createErrorResponse(response: Response, message: string, error: string, status: number = 400): Response<IResponseError> {
    return response.status(status).json(
        {
            data: null,
            message,
            code: status,
            error
        }
    );
}
