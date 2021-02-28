module.exports = client => {
    const prefix = "r!";
    const { Client, MessageEmbed } = require('discord.js');

    
client.on('message', message => {
    if (!message.member.roles.cache.some(role => role.name === 'si')) return;
    if (message.content.toLowerCase().startsWith(`${prefix}hmod`)) {
    const embed = new MessageEmbed()
    .setTitle('Serve aiuto?')
    .setDescription('Per avere informazioni sulle varie tipologie di comandi disponibili utilizza `r!<categoria>`. \n\n  • `cazzeggio`: comandi passatempo; \n\n • `social`: _Ratorix e dove trovarlo_; \n\n • `altri`: altri comandi; \n\n • `moderazione`: comandi dediti alla moderazione della chat.')
    .setTimestamp()
    .setColor('#808080')
    .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
    .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814966536456110096/unnamed.jpg');
    message.channel.send(embed);
    };

})};
