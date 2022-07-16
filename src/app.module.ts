import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';
import { ChatGateway } from './chat.gateway';
import { ServeStaticModule } from '@nestjs/serve-static';
const path = require('path');

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', 'client/build'),
    }),
    UserModule,
    MessageModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  providers: [ChatGateway],
})
export class AppModule {}
