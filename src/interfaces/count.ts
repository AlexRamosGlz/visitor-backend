export interface ICount {
    id: number
    count: number
}

export interface ICountPayload {
    count: number
}

export interface ICountError {
    message: string,
    code?: number
}