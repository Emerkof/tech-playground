import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): object {
    console.log(request.query);

    return { meow: 1 };
  }

  @Post()
  create(@Body() body: CreateCatDto): Promise<CreateCatDto> {
    return Promise.resolve(body);
  }
}
