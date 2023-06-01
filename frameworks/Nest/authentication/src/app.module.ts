import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'entities/user.entity';
import { AdminModule } from './admin/admin.module';
import { Movie } from 'entities/movie.entity';
import { ClientModule } from './client/client.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs',
    entities: [User,Movie],
    autoLoadEntities: true,
    synchronize: true,
 }),AuthModule,AdminModule,ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
