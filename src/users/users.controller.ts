import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  getUsers() {
    return this.service.findAll();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.findOne(params.id);
  }

  // @Post()
  // create(@Body() user: User) {
  //   return this.service.c(user);
  // }

  // @Put()
  // update(@Body() user: User) {
  //   return this.service.updateUser(user);
  // }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.remove(params.id);
  }
}
