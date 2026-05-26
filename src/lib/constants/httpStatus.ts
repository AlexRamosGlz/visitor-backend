export const HTTP_STATUS_CODES = {
    // Success status code
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,

    // Client error status code
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
}

export const HTTP_STATUS_MESSAGES = {
    // Success status message
    OK: "OK",
    CREATED: "Created",
    NO_CONTENT: "No Content",

    // Client error status message
    BAD_REQUEST: "Bad Request",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    NOT_FOUND: "Not Found",
    METHOD_NOT_ALLOWED: "Method Not Allowed",
    REQUEST_TIMEOUT: "Request Timeout",
    CONFLICT: "Conflict",

    // Server error status message
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    NOT_IMPLEMENTED: "Not Implemented",
    BAD_GATEWAY: "Bad Gateway",
    SERVICE_UNAVAILABLE: "Service Unavailable",
    GATEWAY_TIMEOUT: "Gateway Timeout",
}