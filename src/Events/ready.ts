import { Event } from "../Interfaces";

export const event: Event = {
    name: "ready",
    run: (client) => {
        console.log(`${client.user.username} is online`);
        client.user.setActivity('with Typescript!');
    }
}