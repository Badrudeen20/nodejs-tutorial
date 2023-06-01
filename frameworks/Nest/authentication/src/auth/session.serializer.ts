import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserDto } from 'dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer  extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: UserDto, done: Function) {
    done(null, user.email);
  }

  deserializeUser(email: string, done: Function) {
    const user = this.usersService.findOne(email);
    if (!user) {
      return done(
        `Could not deserialize user: user with ${email} could not be found`,
        null,
      );
    }

    done(null, user);
  }
}