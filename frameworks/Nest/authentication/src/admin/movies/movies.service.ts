import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieDto } from 'dto/movie.dto';
import { Movie } from 'entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectRepository(Movie)
         private movieRepository: Repository<Movie>,){}


  async create(movieDto: MovieDto):Promise<MovieDto> {
    return await this.movieRepository.save(movieDto);
  }

  async findAll():Promise<MovieDto[]> {
    return await this.movieRepository.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} movie`;
  // }

  // update(id: number, updateMovieDto: UpdateMovieDto) {
  //   return `This action updates a #${id} movie`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} movie`;
  // }
}
