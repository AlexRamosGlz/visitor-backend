interface IResponse<T> {
    data: T
    message: string
    code: number
}

export interface IResponseSuccess<T> extends IResponse<T> {
    data: T
    message: string
    code: number
}

export interface IResponseError extends IResponse<null> {
    data: null
    message: string
    code: number
    error: string
}