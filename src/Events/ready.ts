import { Event } from "../Interfaces";
import { Document } from 'mongoose';
import { User } from "discord.js";
import ms from 'ms'

export const event: Event = {
    name: "ready",
    run: (client) => {
        console.log(`${client.user.username} is online`);
        client.user.setActivity('with Typescript!');
    }
}