import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: AuthLoginDto) {
    const { email, password } = loginDto;

    // do validate user input here
    // if (email !== "tuyen@gmail.com" || password !== "1234") throw new UnauthorizedException();

    const payload = { email, password };

    return {
      token: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
    }
  }
}
