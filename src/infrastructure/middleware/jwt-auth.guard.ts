import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  /* eslint-disable @typescript-eslint/no-unused-vars */
  handleRequest<T extends { userId: string; username: string }>(
    err: any,
    user: T,
    info: any,
    context?: ExecutionContext,
    status?: any,
  ): T {
    /* eslint-enable @typescript-eslint/no-unused-vars */
    if (err || !user) {
      throw new UnauthorizedException('No autorizado');
    }
    return user;
  }
}
