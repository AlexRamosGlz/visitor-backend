import { Request, Response } from "express"
import { IController } from "@interfaces/controller";
import { ICount } from "@interfaces/count";
import { IResponseSuccess } from "@interfaces/response";

export class CountController implements IController<ICount>{

    get(request: Request, response: Response): Response<IResponseSuccess<ICount>> {
        return response.json({ count: 0 })
    }

    post(request: Request, response: Response): Response<IResponseSuccess<ICount>> {
        return response.status(201).json({ message: "count updated" })
    }

    put(request: Request, response: Response): Response<IResponseSuccess<ICount>> {
        return response.status(200).json({ message: "count updated" })
    }

    delete(request: Request, response: Response): Response<IResponseSuccess<ICount>> {
        return response.status(200).json({ message: "count deleted" })
    }
}

