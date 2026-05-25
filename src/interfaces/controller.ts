import { IResponseSuccess } from "@interfaces/response";
import { Request, Response } from "express";

export interface IController<T> {
    get(request: Request, response: Response): Response<IResponseSuccess<T>>
    post(request: Request, response: Response): Response<IResponseSuccess<T>>
    put(request: Request, response: Response): Response<IResponseSuccess<T>>
    delete(request: Request, response: Response): Response<IResponseSuccess<T>>
}   