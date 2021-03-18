import { Command } from '../../Interfaces';
import { MessageEmbed } from 'discord.js';

export const command: Command = {
    name: "ping",
    description: "Displays the api's latency and the bot's response time",
    aliases: ['pong'],
    usage: "ping",
    category: "Bot",
    cooldown: 5,
    devOnly: false,
    run: async (client, message, args) => {
        
        const msg = await message.channel.send('Ping?');

        msg.edit({
            embed: {
                color: "BLUE",
                title: "Pong!",
                description: `That took ${msg.createdTimestamp - message.createdTimestamp} ms`
            }
        })

        msg.edit("\u200b");

    }
}