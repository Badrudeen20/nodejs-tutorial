import { Controller, Get, Post, Body, Patch,Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  findAll():Promise<CreateUserDto[]>{
    return this.usersService.findAll();
  }  

  @Post('create')
  async create(@Body() userData: CreateUserDto): Promise<any> {
    return this.usersService.create(userData);
  }  

  @Put(':id/update')
  async update(@Param('id') id, @Body() usertData: CreateUserDto): Promise<any> {
        usertData.id = Number(id);
        return this.usersService.update(usertData,usertData.id);
  }  


  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.usersService.delete(id);
  }  

}
