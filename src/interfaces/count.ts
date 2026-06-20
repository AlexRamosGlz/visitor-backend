export interface ICount {
    count: number | null;
    globalCount: number;
}

export interface ICountPayload {
    count: number
}

export interface ICountError {
    message: string,
    code?: number
}

export interface ICountCreated {
    countId: string
}

export class CountServiceError extends Error{
    public message: string
    public functioName: string
    public details: any

    constructor(message: string, functionName: string, details: any) {
        super();
        this.message = message;
        this.details = details;
        this.functioName = `[${functionName}()]`;
    }

    public toJson() {
        return {
            message: this.message,
            functionName: this.functioName,
            details: this.details
        }
    }

    public getError() {
        return this.message;
    }

    public getFunctionName() {
        return this.functioName
    }

    public getDetails() {
        return this.details
    }
}