module.exports = client => {
  const {  MessageEmbed } = require('discord.js');
  const prefix = "r!";

    client.on('message', message => { 
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
       
        const embed = new MessageEmbed()
        .setTitle('Ban')
        .setDescription(`${client.user.username} è stato cacciato definitivamente da questo server.`)
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
        const embed4 = new MessageEmbed()
        .setTitle('_Something Wrong I can Feel It_')
        .setDescription("Mh sembra che quell'essere immondo non sia qui.")
        .setTimestamp()
        .setColor('#808080')
        .setFooter('RatBot', 'https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg');
      
        if (!message.guild) return;
        
          if (message.content.startsWith(`${prefix}ban`)) {
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member
                  .ban({
                    reason: 'Chiedi spiegazioni ai mod non so che dirti.',
                  })
                  .then(() => {
                    message.channel.send(embed);
                  })
                  .catch(err => {
                    message.channel.send(embed2);
                    console.error(err);
                  });
              } else {
                message.channel.send(embed4);
              }
            } else {
              message.channel.send(embed3);
            }
          }
        });
      
}