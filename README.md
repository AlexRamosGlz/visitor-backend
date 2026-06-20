# Visitor Backend

Backend for my app "Visitor" meant to showcase my skills and knoledge on Software Development, DevOps and Cloud engineering

## API Endpoints

### Count Endpoints

Base path: `/count`

#### 1. GET /count/:id
Retrieve visitor count for a specific IP address.

**Method:** `GET`  
**Path:** `/:id`  
**Status Code:** `200 OK`

**Request Parameters:**
- `id` (optional): Integer parameter (defaults to 1 if not provided)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "ip": "192.168.1.1",
    "count": 5,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "message": "count retrieved",
  "statusCode": 200
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Not Found",
  "error": "Error retrieving count",
  "statusCode": 404
}
```

---

#### 2. POST /count
Create a new count entry.

**Method:** `POST`  
**Path:** `/`  
**Status Code:** `201 Created`

**Middleware:** `countMiddleware.parseCountBody`

**Request Body:**
```json
{
  "ip": "192.168.1.1",
  "count": 1
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "ip": "192.168.1.1",
    "count": 1,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "message": "count created",
  "statusCode": 201
}
```

**Error Response (500):**
```json
{
  "success": false,
  "message": "Internal Server Error",
  "error": "Error creating count",
  "statusCode": 500
}
```

---

#### 3. PATCH /count/:id
Update an existing count entry.

**Method:** `PATCH`  
**Path:** `/:id`  
**Status Code:** `200 OK`

**Middleware:** `countMiddleware.parseCountBody`

**Request Parameters:**
- `id` (optional): Integer parameter (defaults to 1 if not provided)

**Request Body:**
```json
{
  "count": 5
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "ip": "192.168.1.1",
    "count": 5,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:35:00Z"
  },
  "message": "count updated",
  "statusCode": 200
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Not Found",
  "error": "Error updating count",
  "statusCode": 404
}
```

---

#### 4. DELETE /count
Delete a count entry.

**Method:** `DELETE`  
**Path:** `/`  
**Status Code:** `200 OK`

**Response:**
```json
{
  "success": true,
  "data": null,
  "message": "count deleted",
  "statusCode": 200
}
```

---

## Request/Response Format

All API responses follow a standardized format:

```json
{
  "success": boolean,
  "data": object | null,
  "message": string,
  "statusCode": number,
  "error": string (only on error responses)
}
```

**Status Codes:**
- `200 OK` - Successful request
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request parameters
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error


----

```
Visitor_backend
├── docker-compose.builder.yml
├── docker-compose.dev.yml
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── controllers
│   │   └── count.ts
│   ├── data-source.ts
│   ├── entities
│   │   └── Count.ts
│   ├── index.ts
│   ├── interfaces
│   │   ├── controller.ts
│   │   ├── count.ts
│   │   └── response.ts
│   ├── lib
│   │   ├── constants
│   │   │   └── httpStatus.ts
│   │   └── responses.ts
│   ├── middleware
│   │   └── count.middleware.ts
│   ├── repositories
│   │   └── count.repository.ts
│   ├── routes
│   │   ├── count.route.ts
│   │   └── router.ts
│   └── services
│       └── Count.services.ts
└── tsconfig.json

11 directories, 20 files
```

----