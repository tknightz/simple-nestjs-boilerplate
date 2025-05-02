import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';
import { User } from '../database/schema/user.schema';
import type { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: AuthLoginDto) {
    const { email, password } = loginDto;

    // do validate user input here
    const foundUser = await this.userModel.findOne({ email });
    if (foundUser.password !== password) throw new UnauthorizedException();

    const payload = { email, id: foundUser.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
