import { GuildConfiguration } from "src/utils/typeorm/entities/GuildConfiguration";
//1
export interface IGuildsService {

getGuildConfig(guildId: string): Promise<GuildConfiguration>;


updateGuildPrefix(
  guildId: string,
prefix: string,
): Promise<GuildConfiguration>;

updateWlrole(
  guildId: string,
wlrole: string,
): Promise<GuildConfiguration>;

updateChannel(
  guildId: string,
channel: string,
): Promise<GuildConfiguration>;

 updateWelcomeChannel(guildId: string, welcomeChannelId: string);
}
