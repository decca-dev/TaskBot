import Client from '../Client';
import { Message } from 'discord.js';

interface Run {
    (client: Client, message: Message, args: string[]);
}

export interface Command {
    name: string;
    description: string;
    usage: string;
    aliases?: string[];
    botPerms?: string[];
    memberPerms?: string[];
    category: string;
    cooldown?: string;
    devOnly: boolean;
    run: Run;
}