# Simple NestJS Boilerplate

A modern, feature-complete NestJS boilerplate with MongoDB, JWT authentication, and TypeScript.

## Features

- 🚀 **NestJS Framework** - Progressive Node.js framework for building efficient, reliable and scalable server-side applications
- 📦 **MongoDB & Mongoose** - NoSQL database with ODM for data modeling
- 🔐 **JWT Authentication** - Secure authentication with Passport.js and JWT tokens
- 📋 **Validation & Serialization** - Input validation with class-validator and class-transformer
- 📚 **API Documentation** - Auto-generated Swagger/OpenAPI documentation
- 🎨 **Code Formatting** - Biome for fast, consistent code formatting and linting
- ⚡ **Bun Runtime** - Fast JavaScript runtime and package manager
- 🧪 **Testing Ready** - Jest setup for unit and e2e testing

## Project Structure

```
src/
├── main.ts                 # Application bootstrap
├── app.module.ts           # Root module
├── modules/                # Feature modules
│   ├── users/              # User management module
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.entity.ts
│   │   └── dto/            # Data Transfer Objects
│   └── auth/               # Authentication module
│       ├── auth.module.ts
│       ├── auth.controller.ts
│       ├── auth.service.ts
│       ├── jwt.strategy.ts
│       ├── jwt-auth.guard.ts
│       ├── types/
│       └── dto/
├── core/                   # App-wide infrastructure
│   ├── core.module.ts      # Global configurations
│   ├── mongoose-config.service.ts
│   ├── seed/               # Database seeding
│   └── scripts/            # Utility scripts
├── common/                 # Shared utilities
│   ├── filters/            # Exception filters
│   ├── guards/             # Route guards
│   ├── interceptors/       # Response interceptors
│   ├── pipes/              # Validation pipes
│   └── utils/              # Generic utilities
└── config/                 # Centralized configuration
    └── configuration.ts    # Environment configuration
```

## Quick Start

### Prerequisites

- Node.js 18+ or Bun
- MongoDB (local or cloud instance)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd simple-nestjs-boilerplate

# Install dependencies
bun install

# Copy environment variables
cp .env.example .env

# Start MongoDB (if running locally)
mongod

# Run development server
bun run start:dev
```

### Environment Setup

Create a `.env` file in the root directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/nestjs-boilerplate

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=1d

# Application
NODE_ENV=development
PORT=3000
```

## Available Scripts

```bash
# Development
bun run start:dev          # Start development server with hot reload
bun run start:debug        # Start with debug mode

# Production
bun run start:prod         # Start production server
bun run build              # Build application

# Quality
bun run lint               # Lint and fix code
bun run format             # Format code
bun run test               # Run unit tests
bun run test:cov           # Run tests with coverage
bun run test:e2e           # Run e2e tests

# Database
bun run seed               # Seed database with initial data
```

## API Endpoints

### Authentication
- `POST /v1/auth/login` - User login

### Users
- `GET /v1/users` - Get all users
- `GET /v1/users/:id` - Get user by ID
- `POST /v1/users` - Create new user
- `PUT /v1/users/:id` - Update user
- `DELETE /v1/users/:id` - Delete user

## API Documentation

Once the server is running, visit `http://localhost:3000/api` to access the Swagger documentation.

## Development Guidelines

### Code Style
- **Formatting**: Biome (2 spaces, single quotes, semicolons)
- **Naming**: PascalCase for classes, camelCase for variables/methods
- **Imports**: Group external libraries first, then internal modules

### Architecture Patterns
- **Modules**: Feature-based organization in `src/modules/`
- **Dependency Injection**: Constructor injection with `private readonly`
- **Validation**: DTOs with class-validator decorators
- **Error Handling**: NestJS built-in exceptions

### Database
- **ODM**: Mongoose for MongoDB integration
- **Schemas**: Decorated classes with `@Schema()` and `@Prop()`
- **Models**: Injected with `@InjectModel()` decorator

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
