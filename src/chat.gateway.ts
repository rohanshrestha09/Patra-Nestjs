import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('send-message')
  sendMessage(
    @MessageBody() message: { from: string; to: string; msg: string },
  ): void {
    this.server.emit('receive-message', message);
  }
}
