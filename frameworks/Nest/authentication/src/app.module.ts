import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { DashboardModule } from './admin/dashboard/dashboard.module';
import { UsersModule } from './admin/users/users.module';

@Module({
  imports: [LoginModule, RegisterModule, DashboardModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
