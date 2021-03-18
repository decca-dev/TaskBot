import { Command } from '../../Interfaces';
import { MessageEmbed } from 'discord.js';

export const command: Command = {
    name: "ping",
    description: "Displays the api's latency and the bot's response time",
    aliases: ['pong'],
    usage: "ping",
    category: "Bot",
    cooldown: 9,
    devOnly: false,
    run: async (client, message, args) => {
        message.channel.send(`API Ping: ${client.ws.ping} ms`)
    }
}