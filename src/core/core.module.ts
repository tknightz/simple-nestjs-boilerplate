import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from '../config/configuration';
import { MongooseConfigService } from '../database/mongoose-config.service';

/**
 * CoreModule encapsulates essential application infrastructure configurations.
 * It sets up the global ConfigModule and the primary Mongoose database connection.
 * By marking it as @Global(), its providers (like ConfigService) and exports
 * (like MongooseModule connection) are available application-wide without needing
 * to import CoreModule into every feature module.
 */
@Global() // Make ConfigService and Mongoose connection available globally
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true, // Keep this true for easy access to ConfigService everywhere
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  // No providers needed here unless CoreModule itself has specific services.
  // No need to export ConfigModule as it's global.
  // MongooseModule.forRootAsync handles the connection globally.
  // Feature modules will use MongooseModule.forFeature() to get specific models.
  exports: [
    // We don't strictly need to export MongooseModule here because forRootAsync
    // establishes the connection globally. Feature modules use forFeature.
    // However, exporting it can sometimes be useful for clarity or specific scenarios,
    // but it's generally not required for the standard pattern.
    // MongooseModule
  ],
})
export class CoreModule {}
