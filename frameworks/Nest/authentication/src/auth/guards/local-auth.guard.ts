
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { CanActivate, ExecutionContext, Injectable,UnauthorizedException} from '@nestjs/common';
// import { Observable } from 'rxjs';


@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);
    const request = context.switchToHttp().getRequest() as Request;
    await super.logIn(request);
    return true;
  }
}
