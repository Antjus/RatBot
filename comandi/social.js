module.exports = client => {
    const {  MessageEmbed } = require('discord.js');
    const prefix = "r!";
   
    client.on('message', message => { //youtube
        if (message.content.startsWith(`${prefix}youtube`)) {
          const embed = new MessageEmbed()
      
            .setTitle('YouTube')
            .setDescription("Il canale youtube di Ratorix")
            .setTimestamp()
            .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814859780089970719/download_2.png?width=473&height=473')
            .setColor('#808080')
            .setURL('https://www.youtube.com/channel/UCd6_-wvwZZr08S_82myJYzQ');
          message.channel.send(embed);
        }
      });
      
      client.on('message', message => { //twitter
        if (message.content.startsWith(`${prefix}twitter`)) {
          const embed = new MessageEmbed()
      
            .setTitle('Twitter')
            .setDescription("Il twitter di Ratorix")
            .setTimestamp()
            .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814858457739821056/download.png?width=532&height=473')
            .setColor('#808080')
            .setURL('https://twitter.com/GS_Ratorix');
          message.channel.send(embed);
        }
      });
      
      client.on('message', message => { //instagram
        if (message.content.startsWith(`${prefix}instagram`)) {
          const embed = new MessageEmbed()
      
            .setTitle('Instagram')
            .setDescription("L'instagram di Ratorix")
            .setTimestamp()
            .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814858817132298260/download_1.png?width=473&height=473')
            .setColor('#808080')
            .setURL('https://www.instagram.com/ratorix/');
          message.channel.send(embed);
        }
      });
      
      client.on('message', message => { //subreddit
        if (message.content.toLowerCase().startsWith(`${prefix}subreddit`)) {
          const embed = new MessageEmbed()
      
            .setTitle('Subreddit')
            .setDescription("Il subreddit di Ratorix")
            .setTimestamp()
            .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814859567459860490/download_1.jpg?width=473&height=473')
            .setColor('#808080')
            .setURL('https://www.reddit.com/r/Ratorix/');
          message.channel.send(embed);
        }
      });
      
      client.on('message', message => { //twitch
        if (message.content.startsWith(`${prefix}twitch`)) {
          const embed = new MessageEmbed()
      
            .setTitle('Twitch')
            .setDescription("Il Twitch di Ratorix")
            .setTimestamp()
            .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/814582828348080178/814929572512530492/twitch.png')
            .setColor('#808080')
            .setURL('https://www.twitch.tv/ratorix98');
          message.channel.send(embed);
        }
      });
      
      
      
}