import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GuildConfiguration } from 'src/utils/typeorm/entities/GuildConfiguration';
@WebSocketGateway()
export class WebsocketHandler {
  @WebSocketServer()
  ws: Server;

  @SubscribeMessage('guilds')
  guildsHandler(@MessageBody() data: any) {
    console.log(data);
  }

  @SubscribeMessage('testing')
  testHandler(@MessageBody() data: string) {
    console.log(data);
    console.log('messageRecieved')
  }
//создание функций
  guildPrefixUpdate(config: GuildConfiguration) {
    this.ws.emit('guildPrefixUpdate', config);
  }
  wlroleUpdate(config: GuildConfiguration) {
    this.ws.emit('wlroleUpdate', config);
  }
  channelUpdate(config: GuildConfiguration) {
    this.ws.emit('channelUpdate', config);
  }

  TestMessage(data: string) {
    this.ws.emit('testGuilds', data);
  }
}
