# AGENTS.md - Simple NestJS Boilerplate

This document provides guidelines for agentic coding agents working in this NestJS repository.

## Build, Lint, and Test Commands

### Build Commands
- `bun run build` - Build the application using NestJS CLI
- `bun run start:prod` - Start production build with Bun

### Development Commands
- `bun run start:dev` - Start development server with hot reload using Bun
- `bun run start:debug` - Start with debug mode and watch
- `bun run start` - Start without watch using NestJS CLI

### Linting and Formatting
- `bun run lint` - Lint and fix code using Biome (includes TypeScript files in src/, test/)
- `bun run format` - Format code using Prettier (src/**/*.ts and test/**/*.ts)

### Testing Commands
- `bun run test` - Run all unit tests with Jest
- `bun run test:watch` - Run tests in watch mode
- `bun run test:cov` - Run tests with coverage report
- `bun run test:debug` - Run tests in debug mode with inspector
- `bun run test:e2e` - Run end-to-end tests

#### Running a Single Test
To run a specific test file:
```bash
bunx jest path/to/test.spec.ts
```

To run tests for a specific module:
```bash
bunx jest --testPathPattern="auth"  # Runs all auth-related tests
```

## Code Style Guidelines

### TypeScript Configuration
- Target: ES2021
- Module: CommonJS
- Strict mode is disabled (strictNullChecks: false, noImplicitAny: false)
- Decorators enabled (emitDecoratorMetadata: true, experimentalDecorators: true)
- Source maps enabled

### Formatting (Biome Configuration)
- Indent style: 2 spaces
- Line width: 80 characters
- Single quotes for strings
- Semicolons: always
- Trailing commas: all
- Arrow parentheses: always
- Bracket spacing: true
- Line endings: LF

### Import Organization
- Use type imports for interfaces/types: `import type { Model } from 'mongoose'`
- Group imports by external libraries first, then internal modules
- Use relative imports for internal modules
- Biome automatically organizes imports

### Naming Conventions

#### Files and Directories
- Use kebab-case for file names: `auth-login.dto.ts`, `jwt-auth.guard.ts`
- Use kebab-case for directory names: `auth/`, `database/`
- Test files: `*.e2e-spec.ts` for e2e tests

#### Classes and Types
- PascalCase for class names: `AuthService`, `AuthController`
- PascalCase for DTOs: `AuthLoginDto`
- PascalCase for schemas: `UserSchema`
- PascalCase for modules: `AuthModule`

#### Variables and Functions
- camelCase for variables, methods, and functions
- Private members prefixed with `_` if needed (though not commonly used in this codebase)
- Constructor parameters use camelCase

#### Constants
- UPPER_SNAKE_CASE for configuration constants

### NestJS Patterns

#### Module Structure
- Each feature in its own module directory
- Module files named `*.module.ts`
- Export modules from index files when appropriate

#### Controllers
```typescript
@ApiTags('FeatureName')
@Controller({
  path: 'feature-name',
  version: '1',
})
export class FeatureController {
  constructor(private readonly service: FeatureService) {}

  @Get()
  async getAll() {
    return this.service.getAll();
  }
}
```

#### Services
```typescript
@Injectable()
export class FeatureService {
  constructor(
    @InjectModel(Model.name) private model: Model<Model>,
    private otherService: OtherService,
  ) {}

  async method() {
    // Implementation
  }
}
```

#### DTOs
- Use class-validator decorators
- Use @ApiProperty for Swagger documentation
- Required fields use @IsNotEmpty()
- Email fields use @IsEmail()

```typescript
export class CreateDto {
  @ApiProperty({ example: 'example@email.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
```

#### Database Schemas
- Use @Schema() decorator
- Use @Prop() for properties
- Export both class and schema factory

```typescript
@Schema()
export class Entity {
  @Prop()
  property: string;
}

export const EntitySchema = SchemaFactory.createForClass(Entity);
```

### Error Handling
- Use NestJS built-in exceptions: `UnauthorizedException`, `BadRequestException`, etc.
- Throw exceptions directly in services
- Let global exception filters handle HTTP responses

### Authentication & Guards
- JWT authentication with passport
- Custom guard decorators: `@UseJWTAuth()`
- Extend `AuthGuard('jwt')` for custom guards

### API Documentation
- Swagger/OpenAPI enabled
- Use @ApiTags() for grouping endpoints
- Use @ApiBearerAuth() for protected routes
- API versioning with URI: `/v1/auth/login`

### Dependency Injection
- Use constructor injection
- Mark injected services as `private readonly`
- Use @InjectModel() for Mongoose models

### Configuration
- Use @nestjs/config for environment variables
- Configuration in `src/config/configuration.ts`

### Testing
- Unit tests use Jest with default configuration
- E2E tests in `test/` directory with separate Jest config
- Test files named `*.e2e-spec.ts`
- Use supertest for HTTP endpoint testing

### Database
- MongoDB with Mongoose
- Custom mongoose config service
- Schemas in `src/database/schemas/`

### Scripts and Utilities
- Seed scripts in `src/scripts/`
- Seed services in `src/seed/`
- Use Bun for running scripts in development

## Project Structure

```
src/
├── app.module.ts           # Root module
├── main.ts                 # Application bootstrap
├── config/                 # Configuration files
├── core/                   # Core functionality
├── database/               # Database schemas and config
├── auth/                   # Authentication module
├── user/                   # User management module
├── seed/                   # Database seeding
└── scripts/                # Utility scripts

test/                       # E2E tests
```

## Development Workflow

1. Run `bun run start:dev` for development
2. Run `bun run lint` before committing (automatically runs on pre-commit)
3. Run `bun run format` to format code
4. Run `bun run test` to ensure tests pass
5. Run `bun run build` to verify build succeeds

### Git Hooks
- **Pre-commit**: Automatically runs `bun run lint` to format and lint code before each commit
- Install hooks: `bun install` (runs `prepare` script which sets up husky)

## Common Patterns

- Async/await for all async operations
- Early returns for error conditions
- Destructuring assignment for object properties
- Template literals for string concatenation
- Optional chaining for safe property access

## Performance Considerations

- Use DTOs for input validation
- Implement proper indexing on database queries
- Use streaming for large data responses
- Cache frequently accessed data when appropriate</content>
<parameter name="filePath">AGENTS.md