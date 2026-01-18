import { NestFactory } from '@nestjs/core';
import { SeedModule } from '../seed/seed.module';
import { SeedService } from '../seed/seed.service';

async function bootstrap() {
  try {
    const app = await NestFactory.createApplicationContext(SeedModule);
    const seedService = app.get(SeedService);
    await seedService.seed();
    await app.close();
    process.exit(0);
  } catch (error) {
    console.error('Error occurred while seeding the database', error);
    process.exit(1);
  }
}

bootstrap();
