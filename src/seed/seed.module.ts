import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from '../core/core.module';
import { User, UserSchema } from '../database/schemas/user.schema';
import { SeedService } from './seed.service';

@Module({
  imports: [
    CoreModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
