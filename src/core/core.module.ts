import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from '../config/configuration';
import { TypeOrmConfigService } from './typeorm-config.service';

/**
 * CoreModule encapsulates essential application infrastructure configurations.
 * It sets up the global ConfigModule and the primary TypeORM database connection.
 * By marking it as @Global(), its providers (like ConfigService) and exports
 * (like TypeOrmModule connection) are available application-wide without needing
 * to import CoreModule into every feature module.
 */
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
  ],
  exports: [],
})
export class CoreModule {}
