import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UseJWTAuth } from './jwt-auth.guard';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthService } from './auth.service';

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
  async getMe(@Req() req) {
    return req.user;
  }
}
