# B2B Project Management

A TypeScript-based backend for a B2B project management platform, designed to streamline collaboration, task management, and workspace organization for businesses. This API supports secure authentication, project tracking, and team coordination, making it ideal for enterprise workflows.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Workspace Management**: Create and manage workspaces for clients or teams.
- **Project Tracking**: Organize projects with tasks, deadlines, and progress tracking.
- **Team Collaboration**: Assign members to projects with role-based access.
- **Secure Authentication**: Supports local login (email/password) and Google OAuth.
- **RESTful API**: Extensible endpoints for integration with frontend or third-party systems.
- **Type-Safe**: Built with TypeScript for reliability and maintainability.

---

## Technologies

- **Backend**: Node.js, Express.js, TypeScript
- **Authentication**: Passport.js (Local and Google OAuth strategies)
- **Session Management**: Express-session
- **Database**: [MongoDB/PostgreSQL—specify your DB here]
- **Validation**: Zod for request validation
- **Environment**: dotenv for configuration management
- **Development Tools**: ESLint, Prettier, Nodemon, ts-node

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- [MongoDB/PostgreSQL—specify your DB] installed and running
- Google OAuth credentials (Client ID and Secret) from [Google Cloud Console](https://console.cloud.google.com/)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rawanatef634/b2b-project-management.git
   cd b2b-project-management
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Copy `.env.example` to `.env` and fill in the values:
     ```env
     PORT=3000
     NODE_ENV=development
     SESSION_SECRET=your-secure-secret
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback
     FRONTEND_ORIGIN=http://localhost:3000
     FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
     BASE_PATH=/api
     MONGO_URI=mongodb://localhost:27017/b2b_pm # Update with your DB URI
     ```

4. **Configure the Database**:
   - Start your database (e.g., `mongod` for MongoDB).
   - Update `MONGO_URI` in `.env` with your connection string.

5. **Compile TypeScript**:
   ```bash
   npm run build
   ```

6. **Run the Server**:
   - Production:
     ```bash
     npm start
     ```
   - Development (with hot reloading):
     ```bash
     npm run dev
     ```

- The API will be available at `http://localhost:8000/api`.

---

## Usage

### Running the Application
- Start the server and connect via a frontend or API client (e.g., Postman).
- Use the endpoints below to manage users, workspaces, projects, and tasks.

### Development
- Use `npm run dev` to run with `nodemon` and `ts-node` for live updates.
- Lint and format code:
  ```bash
  npm run lint
  npm run format
  ```

---

## API Endpoints

| Method | Endpoint                | Description                  | Authentication |
|--------|-------------------------|------------------------------|----------------|
| POST   | `/api/auth/login`       | Login with email/password    | No             |
| POST   | `/api/auth/register`    | Register a new user          | No             |
| GET    | `/api/auth/logout`      | Log out the current user     | Yes            |
| GET    | `/api/auth/google`      | Start Google OAuth flow      | No             |
| GET    | `/api/auth/google/callback` | Google OAuth callback    | No             |
| GET    | `/api/workspace`        | List workspaces              | Yes            |
| POST   | `/api/project`          | Create a project             | Yes            |
| POST   | `/api/task`             | Create a task                | Yes            |

*Note*: Protected endpoints require a valid session (authenticated user).

### Example Request
**Login**:
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

**Response**:
```json
{
  "message": "Logged in successfully",
  "user": { "id": "123", "email": "user@example.com" }
}
```

---

## Authentication

- **Local Strategy**: Email/password login using Passport.js Local Strategy.
- **Google OAuth**: Single sign-on with Google accounts using Passport.js Google Strategy.
- **Session Management**: Uses `express-session` with a configurable store (e.g., MongoDB for production).

To enable Google OAuth:
1. Set up a project in [Google Cloud Console](https://console.cloud.google.com/).
2. Add your `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `GOOGLE_CALLBACK_URL` to `.env`.

---

## Contributing

Contributions are welcome! Here’s how to get started:

1. **Fork the Repository**:
   - Click "Fork" on GitHub and clone your fork:
     ```bash
     git clone https://github.com/rawanatef634/b2b-project-management.git
     ```

2. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Changes**:
   - Follow the coding style (enforced by ESLint/Prettier).
   - Write clear commit messages.

4. **Submit a Pull Request**:
   - Push your branch and create a PR on GitHub.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

- **Author**: Rawan Atef
- **GitHub**: [rawanatef634](https://github.com/rawanatef634)
- **Email**: [atron944@gmail.com]

For support or inquiries, open an issue on this repository.