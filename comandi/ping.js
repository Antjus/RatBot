module.exports = client => {
    const {  MessageEmbed } = require('discord.js');
    const prefix = "r!";

    client.on('message', message => { 
        if (!message.guild) return;
      
        if (message.content.toLowerCase().startsWith(`${prefix}ping`)) {
        const embed = new MessageEmbed()
    
        .setTitle('Pong 🏓 ')
        .setColor('#808080')
        .setTimestamp()
        .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814602964962508840/external-content.duckduckgo.jpg?width=473&height=473')
        .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
        .setDescription(`Cavalcano Simone vestito da topo a **${Date.now() - message.createdTimestamp}ms**.`);
      message.channel.send(embed);
        }
      });
    
}