const Discord = require('discord.js');

const client = new Discord.Client();


const prefix = '-';

client.once('ready', () => {
    console.log('Tendaris is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong!');
    } else if (command == 'izafe') {
        message.channel.send('https://izafe.se/');
    }
});



client.login('MTAwNTg2OTAwOTE1MDk0NzM0OA.GEQ-47.3WxaI2gtstca86I5kIbexHycRk6T4XjeRJeASY');