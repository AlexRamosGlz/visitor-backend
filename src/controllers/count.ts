import { Request, Response } from "express";
import { IController } from "@interfaces/controller";
import { ICount } from "@interfaces/count";
import CountService from "@services/Count.services";
import { createSuccessResponse, createErrorResponse } from "@lib/responses";
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "@lib/constants/httpStatus";

export class CountController implements IController<ICount> {
  async get(
    request: Request,
    response: Response,
    ): Promise<Response> {
    try {
      const id = request.params.id
      ? parseInt(request.params.id as string, 10)
      : 1;
      const count = await CountService.getCount(id);

      return createSuccessResponse<ICount>(response, count, "count retrieved", HTTP_STATUS_CODES.OK);
    } catch (error: any) {
      return createErrorResponse(response, error.message, HTTP_STATUS_MESSAGES.NOT_FOUND, HTTP_STATUS_CODES.NOT_FOUND);
    }
  }

  async post(
    request: Request,
    response: Response,
  ): Promise<Response> {
    return createSuccessResponse(response, null, "count created", HTTP_STATUS_CODES.CREATED);
  }

  async patch(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const id = request.params.id
      ? parseInt(request.params.id as string, 10)
      : 1;
    try {
      const result = await CountService.updateCount(id);
      return createSuccessResponse<ICount>(response, result, "count updated", HTTP_STATUS_CODES.OK);
    } catch (error: any) {
      return createErrorResponse(response, error.message, HTTP_STATUS_MESSAGES.NOT_FOUND, HTTP_STATUS_CODES.NOT_FOUND);
    }
  }

  async delete(
    request: Request,
    response: Response,
  ): Promise<Response> {
    return createSuccessResponse(response, null, "count deleted", HTTP_STATUS_CODES.OK);
  }
}
