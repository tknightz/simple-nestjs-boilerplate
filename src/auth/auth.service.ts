import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth-login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/database/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: AuthLoginDto) {
    const { email, password } = loginDto;

    // do validate user input here
    // if (email !== "tuyen@gmail.com" || password !== "1234") throw new UnauthorizedException();

    const payload = { email, password };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
