import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AddMessageDto, GetMessageDto } from './dto/message.dto';
import { MessageService } from './message.service';

@Controller('api')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('getmsg')
  getMessage(
    @Res() res: Response,
    @Body() getMessage: GetMessageDto,
  ): Promise<Response> {
    return this.messageService.getMessage(res, getMessage);
  }

  @Post('addmsg')
  addMessage(
    @Res() res: Response,
    @Body() addMessage: AddMessageDto,
  ): Promise<Response> {
    return this.messageService.addMessage(res, addMessage);
  }
}
