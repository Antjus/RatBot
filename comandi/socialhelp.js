module.exports = client => {
    const { MessageEmbed} = require('discord.js');

    client.on('message', message => {
        if (message.content.toLowerCase() ===(`r!social`)) {
        const embed2 = new MessageEmbed()
        .setTitle('Social')
        .setDescription('Ecco tutti i comandi dediti ai social di Ratorix. \n\n • `youtube`: il canale youtube di Ratorix; \n\n • `instagram`: il profilo instagram di Ratorix; \n\n • `twitch`: il canale twitch di Ratorix; \n\n • `twitter`: il profilo twitter di Ratorix; \n\n • `subreddit`: il subreddit di Ratorix.')
        .setTimestamp()
        .setColor('#808080')
        .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814966536456110096/unnamed.jpg')
        .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg');

        message.channel.send(embed2);
        }
        });
}