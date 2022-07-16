import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ImgUrlDto, UserLoginDto, UserSignupDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  createAccount(
    @Body() userSignup: UserSignupDto,
    @Res() res: Response,
  ): Promise<Response> {
    return this.userService.createAccount(res, userSignup);
  }

  @Post('login')
  login(
    @Body() userLogin: UserLoginDto,
    @Res() res: Response,
  ): Promise<Response> {
    return this.userService.login(res, userLogin);
  }

  @Get('authorise')
  authorize(@Headers() headers, @Res() res: Response): Promise<Response> {
    return this.userService.authorise(res, headers);
  }

  @Get('users/:id')
  getUsers(@Res() res: Response, @Param() param): Promise<Response> {
    return this.userService.getUsers(res, param);
  }

  @Put('setavatar/:id')
  setAvatar(
    @Res() res: Response,
    @Param() param,
    @Body() imgUrl: ImgUrlDto,
  ): Promise<Response> {
    return this.userService.setAvatar(res, param, imgUrl);
  }

  @Delete('delete/:id')
  deleteUser(@Res() res: Response, @Param() param): Promise<Response> {
    return this.userService.deleteUser(res, param);
  }
}
