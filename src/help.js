module.exports = client => {
    const prefix = "r!";
    const { Client, MessageEmbed } = require('discord.js');

    
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
    const embed = new MessageEmbed()
    .setTitle('Serve aiuto?')
    .setDescription('Per avere informazioni sulle varie tipologie di comandi disponibili utilizza `r!help <categoria>`')
    .setTimestamp()
    .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
    .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814966536456110096/unnamed.jpg');
    message.channel.send(embed);
    }
})};
