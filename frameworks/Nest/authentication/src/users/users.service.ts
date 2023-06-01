import { Injectable } from '@nestjs/common';
import { UserDto } from 'dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'entities/user.entity';

// This should be a real class/interface representing a user entity
// export type User = {
//     id:number,
//     username:string,
//     password:string
// };

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
      private userRepository: Repository<User>,){}

  async findOne(email: string):Promise<UserDto> {
    return await this.userRepository.findOne({
        where: { email },
    }); 
  }

 
}