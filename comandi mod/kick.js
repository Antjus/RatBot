module.exports = client => {
    const { MessageEmbed } = require('discord.js');
    const prefix = "r!";

    client.on('message', message => {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
        const embed = new MessageEmbed()
        .setTitle('Kick')
        .setDescription(`**${user.tag}** è stato cacciato da questo server.`)
        .setTimestamp()
        .setColor('#808080')
        .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg');
        const embed2 = new MessageEmbed()
        .setTitle('_Something Wrong I can Feel It_')
        .setDescription('Mh sembra che io non possa mandarlo via... sei sicuro di avermi dato i permessi adeguati? Riprova.')
        .setTimestamp()
        .setColor('#808080')
        .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg');
        const embed3 = new MessageEmbed()
        .setTitle('Manca Qualcosa...')
        .setDescription("Menziona l'utente grazie.")
        .setTimestamp()
        .setColor('#808080')
        .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg');
      
          if (!message.guild) return;
          if (!message.member.roles.cache.some(role => role.name === 'si')) return;

          if (message.content.toLowerCase().startsWith(`${prefix}kick`)) {
            if (user) {
              if (member) {
                member
                  .kick('Optional reason that will display in the audit logs')
                  .then(() => {
                    message.channel.send(embed);
                  })
                  .catch(err => {
                    message.reply();
                    console.error(err);
                  });
              } else {
                message.channel.send(embed2);
              }
            } else {
              message.channel.send(embed3);
            }
          }
        });
      
      
}