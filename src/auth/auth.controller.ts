import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import type { AuthLoginDto } from './dto/auth-login.dto';
import { UseJWTAuth } from './jwt-auth.guard';
import type { RequestWithUser } from './types/request-with-user';

@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: AuthLoginDto) {
    return this.service.login(loginDto);
  }

  @Get('me')
  @ApiBearerAuth()
  @UseJWTAuth()
  async getMe(@Req() req: RequestWithUser) {
    return req.user;
  }
}
