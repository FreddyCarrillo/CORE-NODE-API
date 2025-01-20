# Core Node API

**Core Node API** is a robust and well-structured boilerplate for building scalable REST APIs using Node.js and TypeScript. It follows modern best practices for backend development, featuring a modular architecture and clean separation of concerns to ensure maintainability and scalability.


## Features

- 🏗️ **Well-Structured Project**: Organized folder structure with clear separation for configurations, controllers, middlewares, models, routes, services, and validators.
- 🚀 **TypeScript Integration**: Static typing for enhanced code quality, better debugging, and maintainability.
- 🔒 **Secure Development**: Incorporates `bcryptjs` for secure password hashing and validation.
- 🛠️ **Validation**: Input validation and sanitization with `express-validator` for reliable API endpoints.
- 🗄️ **MongoDB Ready**: Built-in integration with MongoDB using `mongoose`.
- 🎛️ **Environment Management**: Simplified configuration management with `dotenv`.
- 🔄 **Efficient Development Workflow**: Automatic server restarts on file changes with `nodemon`.


## Prerequisites

- Node.js (v20 or higher)
- npm (latest version recommended)

## Project Structure

The project is organized to promote clarity and modularity, as follows:  

```plaintext
.
├── README.md                # Project documentation
├── nodemon.json             # Nodemon configuration for development
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── src                      # Main source code
│   ├── config               # Application configurations
│   │   └── database.ts      # Database connection logic
│   ├── controllers          # Handles incoming requests
│   │   └── UserController.ts
│   ├── middlewares          # Custom middleware functions
│   │   └── validateResult.ts
│   ├── models               # Mongoose models
│   │   └── UserModel.ts
│   ├── routes               # API routes
│   │   └── userRoutes.ts
│   ├── services             # Business logic and reusable services
│   │   └── UserService.ts
│   ├── validators           # Request data validation
│   │   └── UserValidator.ts
│   ├── index.ts             # Entry point for the application
│   ├── server.ts            # Server setup and configuration

```

## Getting Started

Follow these steps to set up and run the project:

1. **Switch to the correct Node.js version**:
   ```bash
   nvm use 20
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

The development server will start, and the API will be available locally.

## Key Technologies

- **Node.js**: High-performance server-side JavaScript runtime.
- **TypeScript**: Adds static typing for improved code quality and maintainability.
- **Express**: Fast and minimalist web framework.
- **Mongoose**: Elegant MongoDB object modeling.
- **bcryptjs**: Library for secure password hashing.
- **express-validator**: Middleware for validating and sanitizing incoming requests.
- **dotenv**: Manage environment variables.

## Author

**Freddy Carrillo**  
Feel free to contact me for collaboration, questions, or feedback!

---

Start creating today and take your ideas to the next level! 🚀