import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Country } from 'src/countries/entities/country.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Country])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
