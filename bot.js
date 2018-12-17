const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523910601571958785")
setInterval(function() {
channel.send(`ahmad leagend is perfect i like ahmad i like ahmad i love ahmad ahmad ahma d ahmad ahmad `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
