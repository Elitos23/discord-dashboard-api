import { Body, Controller, Get, HttpException, HttpStatus, Inject, Param, Post } from "@nestjs/common";
import { WebsocketHandler } from "src/websocket/socket";

import { ROUTES, SERVICES } from "../../utils/constants"
import { IGuildsService } from "../interfaces/guilds";

// запросы и ендпоинты

//3

@Controller(ROUTES.GUILDS)
export class GuildsController{

  constructor(
    @Inject(SERVICES.GUILDS) private readonly guildsService: IGuildsService,
    @Inject(WebsocketHandler) private readonly wsHandler: WebsocketHandler,
  ) {}
  @Get('config/:guildId')
async  getGuildConfig(@Param('guildId') guildId: string ) {
  const guildConfig = await this.guildsService.getGuildConfig(guildId)
if (!guildConfig)
throw new HttpException('Guild config not found',
 HttpStatus.NOT_FOUND, );

return guildConfig;
  }
  @Post(':guildId/config/prefix')
 async updateGuildPrefix(
   @Param('guildId') guildId: string,
   @Body('prefix') prefix: string,
 ) {
   const config = await this.guildsService.updateGuildPrefix(guildId, prefix);
   this.wsHandler.guildPrefixUpdate(config);

   return config;
 }
 @Post(':guildId/config/wlrole')
async updateWlrole(
  @Param('guildId') guildId: string,
  @Body('wlrole') wlrole: string,
) {
  const config = await this.guildsService.updateWlrole(guildId, wlrole);
  this.wsHandler.wlroleUpdate(config);

  return config;
}

@Post(':guildId/config/channel')
async updateChannel(
 @Param('guildId') guildId: string,
 @Body('channel') channel: string,
) {
 const config = await this.guildsService.updateChannel(guildId, channel);
 this.wsHandler.channelUpdate(config);

 return config;
}

  @Post(':guildId/config/welcome')
  async updateWelcomeChannel(
    @Param('guildId') guildId: string,
    @Body('channelId') channelId: string,
  ) {
    return this.guildsService.updateWelcomeChannel(guildId, channelId);
  }
}
