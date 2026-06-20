import { Request, Response } from "express";
import { IController } from "@interfaces/controller";
import { CountServiceError, ICount } from "@interfaces/count";
import { countService } from "@services/Count.services";
import { createSuccessResponse, createErrorResponse } from "@lib/responses";
import {
  HTTP_STATUS_CODES,
  HTTP_STATUS_MESSAGES,
} from "@lib/constants/httpStatus";

export class CountController implements IController<ICount> {
  /**
   * Controlador GET para obtener el conteo asociado a la cookie countId.
   * @param request Objeto de solicitud Express.
   * @param response Objeto de respuesta Express.
   * @returns La respuesta HTTP con los datos del conteo o un error.
   */
  async get(request: Request, response: Response): Promise<Response> {
    try {
      const { countId } = request.cookies;

      const result = await countService.getCount(String(countId));

      if (result instanceof CountServiceError) throw result;

      return createSuccessResponse<ICount>(
        response,
        result,
        "count retrieved",
        HTTP_STATUS_CODES.OK,
      );
    } catch (error: any) {
      return createErrorResponse(
        response,
        error.message,
        HTTP_STATUS_MESSAGES.NOT_FOUND,
        HTTP_STATUS_CODES.NOT_FOUND,
      );
    }
  }

  /**
   * Controlador POST para crear un nuevo conteo y establecer la cookie countId.
   * @param request Objeto de solicitud Express.
   * @param response Objeto de respuesta Express.
   * @returns La respuesta HTTP indicando que el conteo fue creado.
   */
  async post(request: Request, response: Response): Promise<Response> {
    try {
      const result = await countService.createCount();

      if (result instanceof CountServiceError) {
        throw result;
      }

      response.cookie("countId", result.countId, {
        httpOnly: true,
        sameSite: "lax",
      });

      return createSuccessResponse(
        response,
        null,
        "Count creada correctamente",
        HTTP_STATUS_CODES.CREATED,
      );
    } catch (error: any) {
      return createErrorResponse(
        response,
        error.message,
        HTTP_STATUS_MESSAGES.INTERNAL_SERVER_ERROR,
        HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Controlador PATCH para incrementar el conteo asociado a la cookie countId.
   * @param request Objeto de solicitud Express.
   * @param response Objeto de respuesta Express.
   * @returns La respuesta HTTP con el conteo actualizado o un error.
   */
  async patch(request: Request, response: Response): Promise<Response> {
    const { countId } = request.cookies;

    try {
      const result = await countService.updateCount(countId);

      if (result instanceof CountServiceError) throw result;

      return createSuccessResponse<ICount>(
        response,
        result,
        "count updated",
        HTTP_STATUS_CODES.OK,
      );
    } catch (error: any) {
      return createErrorResponse(
        response,
        error.message,
        HTTP_STATUS_MESSAGES.NOT_FOUND,
        HTTP_STATUS_CODES.NOT_FOUND,
      );
    }
  }

  /**
   * Controlador DELETE para eliminar o limpiar el conteo asociado.
   * @param request Objeto de solicitud Express.
   * @param response Objeto de respuesta Express.
   * @returns La respuesta HTTP indicando que el conteo fue eliminado.
   */
  async delete(request: Request, response: Response): Promise<Response> {
    return createSuccessResponse(
      response,
      null,
      "count deleted",
      HTTP_STATUS_CODES.OK,
    );
  }
}
