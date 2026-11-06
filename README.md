# Customer Management API – Node.js & Express

A lightweight REST API built using **Node.js and Express.js** to serve 20,000+ customer records from a local JSON file. This API is intended for frontend development and performance testing, particularly for React-based data grids and customer management interfaces.

## 1. Technology Stack

- Node.js (ES Modules)
- Express.js
- CORS
- JSON-based mock data

## 2. Project Structure

```text
customer-api/
│
├── data/
│   └── customers.json       # 20,000+ mock customer records
│
├── server.js                # Express API entry point
├── package.json
├── package-lock.json
└── README.md
```

## 3. Prerequisites

- Node.js 20.10+ (JSON import attributes support)
- npm

Check installed versions:

```bash
node -v
npm -v
```

## 4. Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd customer-api
```

Install dependencies:

```bash
npm install
```

## 5. Package Configuration

Configure `package.json`:

```json
{
  "name": "customer-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^5.1.0"
  }
}
```

## 6. Start the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Default server URL:

```text
http://localhost:5000
```

## 7. Available API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API health/message |
| GET | `/api/customers` | Retrieve all customer records |

### GET /

Request:

```http
GET http://localhost:5000/
```

Response:

```json
{
  "message": "Hello World!"
}
```

### GET /api/customers

Request:

```http
GET http://localhost:5000/api/customers
```

Response:

Returns all customer records available in `data/customers.json`.

## 8. Customer Dataset

The customer dataset is stored locally:

```text
data/customers.json
```

Expected dataset size:

- 20,000+ customer records
- Unique customer IDs
- Customer names
- Email addresses
- Phone numbers
- Company information
- Address information
- Customer status

Example:

```json
[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@example.com",
    "phone": "9876543210",
    "company": "ABC Technologies",
    "status": "Active"
  }
]
```

## 9. Frontend Integration

Example using React and Axios:

```javascript
import axios from "axios";

const API_URL = "http://localhost:5000/api/customers";

export const getCustomers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
```

## 10. CORS Configuration

CORS is enabled to allow frontend applications running on different development ports to access the API.

```javascript
app.use(cors());
```

## 11. Performance Testing

This API can be used to evaluate frontend data-grid performance with 20,000+ records.

Suggested frontend testing scenarios:

- Client-side pagination
- Server-side pagination
- Column sorting
- Global search
- Column-level filtering
- Row selection
- Edit and delete actions
- Assign customer actions
- React rendering performance
- Virtual scrolling

**Note:** This API currently returns the entire dataset in a single response. For production-scale applications, implement server-side pagination, filtering, sorting, and authorization.

## 12. Future Enhancements

- Server-side pagination
- Search and filtering APIs
- Sorting APIs
- Customer CRUD operations
- JWT authentication
- Role-Based Access Control (RBAC)
- MongoDB integration

## License

This project is intended for development, demonstration, and frontend performance testing.