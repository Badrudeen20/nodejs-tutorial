import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
        private usersRepository: Repository<User>,){}

    //constructor(@InjectModel('User') private userModel:Model<AuthDto>) { }
    
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  async findAll():Promise<CreateUserDto[]>{
    return await this.usersRepository.find()
  }

  async create(user: CreateUserDto): Promise<CreateUserDto> {
    return await this.usersRepository.save(user);
  }


  async update(user: CreateUserDto,id:number){
    return await this.usersRepository.update({id}, user);
  }

  async delete(id:number): Promise<any> {
      return await this.usersRepository.delete(id);
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
