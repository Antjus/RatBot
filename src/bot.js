require('dotenv');

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const prefix = "r!";

client.on('ready', () => {
    client.user.setStatus('idle');
    console.log('Just created a new RatVerse')
});

client.on('message', message => { //invito
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

client.on('message', message => { //kick
    if (!message.guild) return;
  
    if (message.content.startsWith(`${prefix}kick`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`${user.tag} è stato cacciato da questo server.`);
            })
            .catch(err => {
              message.reply('mh sembra che io non possa mandarlo via... sei sicuro di avermi dato i permessi adeguati? Riprova.');
              console.error(err);
            });
        } else {
          message.reply("mh sembra che quell'essere immondo non sia qui.");
        }
      } else {
        message.reply("menziona l'utente, grazie.");
      }
    }
  });

client.on('message', message => { //ban
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
              message.reply(`${user.username} è stato cacciato definitivamente.`);
            })
            .catch(err => {
              message.reply('mh sembra che io non possa mandarlo via... sei sicuro di avermi dato i permessi adeguati? Riprova.');
              console.error(err);
            });
        } else {
          message.reply("mh sembra che quell'essere immondo non sia qui.");
        }
      } else {
        message.reply("menziona l'utente, grazie.");
      }
    }
  });

client.on('message', message => { //ping
    if (!message.guild) return;
  
    if (message.content.startsWith(`${prefix}ping`)) {
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

  const activities_list = [ //lista attività
    "RATBOT | r!help",
    "Twitch: ratorix98",
    "Youtube: GlobalScream - Ratorix",
    "Twitter: GS_Ratorix",
    "Discord: La Tana di Ratorix"
    ]; 

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index]);
    }, 5500); 
});
client.login(token);
