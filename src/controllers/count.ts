import { Request, Response } from "express";
import { IController } from "@interfaces/controller";
import { ICount } from "@interfaces/count";
import { IResponseError, IResponseSuccess } from "@interfaces/response";
import CountService from "@services/Count.services";
import { createSuccessResponse, createErrorResponse } from "@lib/responses";

export class CountController implements IController<ICount> {
  async get(
    request: Request,
    response: Response,
  ): Promise<Response<IResponseSuccess<ICount>>> | Promise<Response<IResponseError>> {
    try {
      const count = await CountService.getCount();

      return createSuccessResponse(response, count, "count retrieved", 200);
    } catch (error) {
      return createErrorResponse(response, "count not found", "Not Found", 404);
    }
  }

  async post(
    request: Request,
    response: Response,
  ): Promise<Response<IResponseSuccess<ICount>>> {
    return createSuccessResponse(response, null, "count created", 201);
  }

  async patch(
    request: Request,
    response: Response,
  ): Promise<Response<IResponseSuccess<ICount>>> {
    const id = request.params.id
      ? parseInt(request.params.id as string, 10)
      : 1;
    const { count } = request.body;
    console.log("Received count update request with id:", id, "and count:", count);
    try {
      const result = await CountService.updateCount(id, count);
      return createSuccessResponse(response, result, "count updated", 200);
    } catch (error) {
      return response.status(404).json({
        message: "count not found",
        code: 404,
        error: "Not Found",
      });
    }
  }

  async delete(
    request: Request,
    response: Response,
  ): Promise<Response<IResponseSuccess<ICount>>> {
    return response.status(200).json({ message: "count deleted" });
  }
}
