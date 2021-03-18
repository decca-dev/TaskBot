import { Command } from '../../Interfaces';
import { MessageEmbed } from 'discord.js';

export const command: Command = {
    name: "help",
    description: "Displays a list of all the bot's commands",
    aliases: ['help', 'commands'],
    usage: "help [command]",
    category: "Bot",
    cooldown: 3,
    devOnly: false,
    run: async (client, message, args) => {
        
        const botCmds = client.commands.filter(cmd => cmd.category === "Bot").map(c => `\`${c.name}\``).join(', ');

        message.channel.send(botCmds)
    }
}