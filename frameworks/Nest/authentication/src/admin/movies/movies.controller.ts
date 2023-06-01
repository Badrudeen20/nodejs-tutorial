import { Controller, Get, Post,Res, Body, Patch, Param, Delete,UseGuards,Request,Session,InternalServerErrorException  } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieDto } from 'dto/movie.dto';
import { Response } from 'express';

// // import { AuthGuard } from '@nestjs/passport';
// import { Request } from 'express';

import { Session as ExpressSession } from 'express-session';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { IsAuthenticatedGuard } from 'src/auth/guards/is-authenticated';
// import { CreateMovieDto } from './dto/create-movie.dto';
// import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(IsAuthenticatedGuard)
  @Post('create')
  async create(@Body() movieDto: MovieDto):Promise<any>  {
    return this.moviesService.create(movieDto);
  }



  // @UseGuards(AuthGuard('local'))
  @UseGuards(IsAuthenticatedGuard)
  @Get('list')
  findAll():Promise<MovieDto[]>  {
    return this.moviesService.findAll();
  }


  // @Get('session')
	// someMethod(@Session() session: ExpressSession) {
	// 	return session;
	// }

  // @UseGuards(LocalAuthGuard)
  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // login(@Request() request: any, @Session() session: ExpressSession) {
  //   return session;
  // }




  // @UseGuards(IsAuthenticatedGuard)
  // @Get('logout')
  // logout(@Request() req, @Res() res: Response) {
  //   req.logout();
  //   res.redirect('/');
  // }

  

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.moviesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
  //   return this.moviesService.update(+id, updateMovieDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.moviesService.remove(+id);
  // }
}
