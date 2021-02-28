module.exports = client => {
    const { MessageEmbed} = require('discord.js');

    client.on('message', message => {
        if (!message.member.roles.cache.some(role => role.name === 'si')) return;
        if (message.content.toLowerCase() ===(`r!moderazione`)) {
        const embed2 = new MessageEmbed()
        .setTitle('Cazzeggio')
        .setDescription('Ecco tutti i comandi dediti alla moderazione del server. \n\n • `ban`: mandare via dal server definitivamente un utente; \n\n • `kick`: mandare via dal server un utente; \n\n **⚠ WORK IN PROGRESS ⚠**')
        .setTimestamp()
        .setColor('#808080')
        .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814966536456110096/unnamed.jpg')
        .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg');
            
        message.channel.send(embed2);
        }
        });
    
}