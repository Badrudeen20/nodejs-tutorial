import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';


@Module({
  imports:[MoviesModule],
  exports:[]
})
export class AdminModule {}
