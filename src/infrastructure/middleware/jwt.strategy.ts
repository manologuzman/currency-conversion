import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

interface JwtPayload {
  sub: string;
  username: string;
  [key: string]: any;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    const secretKey = configService.get<string>('JWT_SECRET');
    if (!secretKey) {
      throw new UnauthorizedException('La clave JWT no está configurada');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretKey,
    });
  }

  validate(payload: JwtPayload): { userId: string; username: string } {
    if (
      !payload ||
      typeof payload.sub !== 'string' ||
      typeof payload.username !== 'string'
    ) {
      throw new UnauthorizedException('Token JWT inválido');
    }
    return {
      userId: payload.sub,
      username: payload.username,
    };
  }
}
