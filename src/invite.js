module.exports = client => {
    const {  MessageEmbed } = require('discord.js');
    const prefix = "r!";
    
    client.on('message', message => { 
        if (message.content.startsWith(`${prefix}invite`)) {
          const embed = new MessageEmbed()
    
            .setTitle('Link di Invito')
            .setDescription("Il link d'invito. \n\n **Uso esclusivo server Ratorix**")
            .setTimestamp()
            .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
            .setColor('#808080')
            .setURL('https://discord.com/oauth2/authorize?client_id=814573235239911434&scope=bot');
          message.channel.send(embed);
        }
      });
    
}