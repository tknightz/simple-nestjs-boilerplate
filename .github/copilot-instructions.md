# GitHub Copilot Instructions for NestJS Boilerplate

You are an expert NestJS developer working on a TypeScript NestJS project with MongoDB/Mongoose. Follow these guidelines for all code suggestions and completions.

## Project Architecture

### NestJS Patterns
- Use modular architecture with feature-based modules
- Controllers use URI versioning: `version: '1'`
- Services use constructor injection with `private readonly`
- Database models use Mongoose with @Schema decorator

### File Structure
```
src/
├── feature/
│   ├── feature.module.ts
│   ├── feature.controller.ts
│   ├── feature.service.ts
│   ├── dto/
│   └── types/
```

## Code Style Rules

### TypeScript Configuration
- Target: ES2021, Module: CommonJS
- Decorators enabled, strict mode disabled
- Use `import type` for type-only imports

### Naming Conventions
- **Files**: kebab-case (`auth-login.dto.ts`)
- **Classes**: PascalCase (`AuthService`, `AuthController`)
- **Methods/Variables**: camelCase (`getUser`, `userData`)
- **Constants**: UPPER_SNAKE_CASE

### Formatting (Biome)
- 2 spaces indentation
- Single quotes for strings
- Semicolons always required
- Trailing commas: all
- Line width: 80 characters
- Arrow parentheses: always

## NestJS Specific Patterns

### Controllers
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

### Services
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

### DTOs
```typescript
export class CreateDto {
  @ApiProperty({ example: 'example@email.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
```

### Database Schemas
```typescript
@Schema()
export class Entity {
  @Prop()
  property: string;
}

export const EntitySchema = SchemaFactory.createForClass(Entity);
```

## Development Workflow

### Commands to Use
- `bun run start:dev` - Development server
- `bun run lint` - Lint with Biome
- `bun run format` - Format with Prettier
- `bun run test` - Run tests
- `bun run build` - Build application

See AGENTS.md for complete command reference and project guidelines.

### Testing
- Unit tests in `*.spec.ts` files
- E2E tests in `test/*.e2e-spec.ts`
- Use Jest with supertest for API testing

## Authentication & Security
- JWT authentication with passport
- Custom guards: `@UseJWTAuth()`
- Use NestJS built-in exceptions for errors
- API documentation with Swagger/OpenAPI

## Common Patterns
- Async/await for all async operations
- Destructuring assignment for objects
- Optional chaining for safe property access
- Template literals for string concatenation
- Early returns for error conditions

## Database
- MongoDB with Mongoose ODM
- Custom mongoose configuration service
- Schemas in `src/database/schemas/`
- Seed scripts in `src/scripts/`

## API Design
- RESTful endpoints with consistent naming
- Input validation with class-validator
- Swagger documentation for all endpoints
- Bearer auth for protected routes

When suggesting code, always follow these patterns and maintain consistency with the existing codebase structure and style.</content>
<parameter name="filePath">.github/copilot-instructions.md