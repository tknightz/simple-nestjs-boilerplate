import { Injectable, UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
class JwtAuthGuard extends AuthGuard('jwt') {}

export function UseJWTAuth() {
  return applyDecorators(UseGuards(JwtAuthGuard));
}
