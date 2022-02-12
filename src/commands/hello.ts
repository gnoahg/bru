import { ButtonInteraction, CommandInteraction, MessageButton, MessageActionRow } from "discord.js";
import { ButtonComponent, Discord, Slash, SlashChoice, SlashOption } from "discordx";

@Discord()
abstract class AppDiscord {
  @Slash("test")
  Test(
    @SlashOption("roblox-username", { description: "Put your Roblox Username." })
    username: string,
    interaction: CommandInteraction
  ) {
    interaction.reply(username);
  }
}