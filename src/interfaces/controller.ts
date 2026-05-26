import { IResponseError, IResponseSuccess } from "@interfaces/response";
import { Request, Response } from "express";

export interface IController<T> {
    get(request: Request, response: Response): Promise<Response<IResponseSuccess<T>>> | Promise<Response<IResponseError>>
    post(request: Request, response: Response): Promise<Response<IResponseSuccess<T>>> | Promise<Response<IResponseError>>
    patch(request: Request, response: Response): Promise<Response<IResponseSuccess<T>>> | Promise<Response<IResponseError>>
    delete(request: Request, response: Response): Promise<Response<IResponseSuccess<T>>>  | Promise<Response<IResponseError>>
}   