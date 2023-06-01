import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { UserDto } from 'dto/user.dto';
import { UnauthenticatedGuard } from 'src/auth/guards/is-authenticated';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  // @Post()
  // create(@Body() createRegisterDto: CreateRegisterDto) {
  //   return this.registerService.create(createRegisterDto);
  // }

  @UseGuards(UnauthenticatedGuard)
  @Post('register')
  async create(@Body() userDto: UserDto):Promise<UserDto> {
    return this.registerService.create(userDto);
  }

  @UseGuards(UnauthenticatedGuard)
  @Get('register')
  index(){
    return 'badru'
  }

  // @Get()
  // findAll() {
  //   return this.registerService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.registerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRegisterDto: UpdateRegisterDto) {
  //   return this.registerService.update(+id, updateRegisterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.registerService.remove(+id);
  // }
}
