require('fs').readFileSync('tokens.txt', 'utf-8').split(/\r?\n/).forEach(token => {

const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

client.on("ready", () => {
})

client.on('message' message => {
    if(message.auhtor.bot) return


if(message.content === "join") {

const voiceid = message.channels.cache.get("--id--channel--")
voiceid.join();
    }
})

client.login(token)
    console.log(token + " Login successful!")
})
