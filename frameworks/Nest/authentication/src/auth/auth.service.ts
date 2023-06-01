import { Injectable } from '@nestjs/common';
import { UserDto } from 'dto/user.dto';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<UserDto> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      // const { password, ...result } = user;
      // return result;
      return user
    }
    return null;
  }
}