import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../database/schemas/user.schema';
import { usersSeed } from './data/users.seed';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async seed() {
    await this.seedUsers();
  }

  async seedUsers() {
    const users = await this.userModel.create(usersSeed);
    this.logger.log(`Seeded ${users.length} users`);
  }
}
