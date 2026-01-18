import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.configService.get<string>('database.uri'),
      dbName: this.configService.get<string>('database.name'),
      user: this.configService.get<string>('database.user'),
      pass: this.configService.get<string>('database.pass'),
    };
  }
}
