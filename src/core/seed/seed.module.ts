import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../modules/users/users.entity';
import { CoreModule } from '../core.module';
import { SeedService } from './seed.service';

@Module({
  imports: [
    CoreModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
