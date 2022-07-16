import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'express';
import { AddMessageDto, GetMessageDto } from './dto/message.dto';
import { Message } from './interface/message.interface';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<Message>,
  ) {}

  async getMessage(
    res: Response,
    { from, to }: GetMessageDto,
  ): Promise<Response> {
    try {
      const messages = await this.messageModel
        .find({
          users: {
            $all: [from, to],
          },
        })
        .sort({ updatedAt: -1 });

      const messagesData = messages.map((element) => {
        return {
          self: element.sender.toString() === from.toString(),
          message: element.message,
        };
      });
      return res.status(201).json(messagesData);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async addMessage(
    res: Response,
    { from, to, message }: AddMessageDto,
  ): Promise<Response> {
    try {
      const data = await this.messageModel.create({
        message: message,
        users: [from, to],
        sender: from,
      });

      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
