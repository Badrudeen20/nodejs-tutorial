import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'dto/user.dto';
import { User } from 'entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RegisterService {

  constructor(@InjectRepository(User)
        private registerRepository: Repository<User>,){}

  async create(userDto:UserDto):Promise<UserDto> {
    return await this.registerRepository.save(userDto);
  }
  // create(createRegisterDto: CreateRegisterDto) {
  //   return 'This action adds a new register';
  // }

  // findAll() {
  //   return `This action returns all register`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} register`;
  // }

  // update(id: number, updateRegisterDto: UpdateRegisterDto) {
  //   return `This action updates a #${id} register`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} register`;
  // }
}
