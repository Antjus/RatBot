module.exports = client => {
    const { MessageEmbed} = require('discord.js');

    client.on('message', message => {
        if (message.content.toLowerCase() ===(`r!cazzeggio`)) {
        const embed2 = new MessageEmbed()
        .setTitle('Cazzeggio')
        .setDescription('Ecco tutti i comandi dediti al cazzeggio. \n\n • `meme`: comando che manda meme presi da r/Ratorix in chat; \n\n **⚠ WORK IN PROGRESS ⚠**')
        .setTimestamp()
        .setColor('#808080')
        .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814966536456110096/unnamed.jpg')
        .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg');
            
        message.channel.send(embed2);
        }
        });
    
}