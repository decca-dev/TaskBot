import { Event, Command } from '../Interfaces';
import { Message, Collection } from 'discord.js';
import ms from 'ms';
import pretty from 'pretty-ms';

export const event: Event = {
    name: 'message',
    run: async (client, message: Message) => {

        if (
            message.author.bot ||
            !message.guild ||
            !message.content.startsWith(client.config.prefix)
        ) return;

        const args = message.content.slice(client.config.prefix.length).trim().split(/ + /g);

        const cmd = args.shift().toLowerCase();

        if (!cmd) return;

        const command = client.commands.get(cmd) || client.aliases.get(cmd);

        if (client.cooldowns.has(`${message.author.id}${command.name}`)) {

            const cooldownTime: string = pretty(client.cooldowns.get(`${message.author.id}${command.name}`) - Date.now())

            const timeLeft: number = client.cooldowns.get(`${message.author.id}${command.name}`) - Date.now()

            return message.channel.send({
                embed: {
                    color: "RED",
                    title: "Slow down",
                    description: `${message.author}, You need to wait ${pretty(timeLeft)} before running **${command.name}** again`
                }
            })

        }

        if (command) (command as Command)
            .run(client, message, args)
            .catch(err => {
                return message.channel.send('An error occured!')
            })

        if (command.cooldown) {

            const leCooldown: number = command.cooldown * 1000

            client.cooldowns.set(`${message.author.id}${command.name}`, Date.now() + leCooldown);

            setTimeout(() => {

                client.cooldowns.delete(`${message.author.id}${command.name}`);

            }, leCooldown);

        }

    }
}