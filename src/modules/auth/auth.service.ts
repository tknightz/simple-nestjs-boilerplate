import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import type { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: AuthLoginDto) {
    const { email, password } = loginDto;

    // do validate user input here
    const foundUser = await this.usersService.findByEmail(email);
    if (!foundUser || foundUser.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { email, id: foundUser.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
