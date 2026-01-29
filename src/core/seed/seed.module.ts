import { Module } from '@nestjs/common';
import { UsersModule } from '../../modules/users/users.module';
import { CoreModule } from '../core.module';
import { SeedService } from './seed.service';

@Module({
  imports: [CoreModule, UsersModule],
  providers: [SeedService],
})
export class SeedModule {}
