import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../../modules/users/users.service';
import { usersSeed } from './data/users.seed';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

  constructor(private usersService: UsersService) {}

  async seed() {
    await this.seedUsers();
  }

  async seedUsers() {
    for (const user of usersSeed) {
      const exists = await this.usersService.findByEmail(user.email);
      if (!exists) {
        await this.usersService.create(user);
      }
    }
    this.logger.log('Seeded users');
  }
}
