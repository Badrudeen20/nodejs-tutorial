import { Module,NestModule,MiddlewareConsumer  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import * as expressSession from 'express-session';
import * as passport from 'passport';
import { SessionSerializer } from './session.serializer';
@Module({
  imports: [UsersModule,PassportModule.register({
    session: true
  })],
  providers: [AuthService, LocalStrategy,SessionSerializer],
})
export class AuthModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	    consumer
	      .apply(
	        expressSession({
	          secret: 'SOME SESSION SECRET',
	          resave: false,
	          saveUninitialized: false,
	        }),
	        passport.session(),
	      )
	      .forRoutes('*');
	  }
}
