import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): string {
    return this.appService.test();
  }

  @Post('/test')
  postTest(@Body('name') name: string, @Res() res, @Req() req) {
    console.log(req);
    console.log(res);
    return res.send(this.appService.postTest(name));
  }
}
