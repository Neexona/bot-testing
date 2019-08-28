const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === `${prefix}ping`) {
    msg.reply('Pong!');
  }
});

client.login('NjE2MzgwMjg1NzgwNDkyMjk4.XWbvHA.kq6x6Hf5-hxCiHGg3czM5c1hXEg');