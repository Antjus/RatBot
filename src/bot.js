require('dotenv');

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const ban = require('../comandi mod/ban.js')
const invite = require('../comandi/invite.js')
const kick = require('../comandi mod/kick.js')
const ping = require('../comandi/ping.js')
const social = require('../comandi/social.js')
const meme = require('../comandi/meme.js')
const helpnonmods = require('../comandi/help1.js')
const cazzeggio = require('../comandi/cazzeggio.js')
const socialhelp = require('../comandi/socialhelp.js')
const helpmod = require('../comandi mod/helpmod.js')
const moderazione = require('../comandi mod/moderazione.js')


client.on('ready', () => {
    client.user.setStatus('idle');
    console.log('Just created a new RatVerse')

    ban(client)
    kick(client)
    invite(client)
    ping(client)
    social(client)
    meme(client)
    helpnonmods(client)
    cazzeggio(client)
    socialhelp(client)
    helpmod(client)
    moderazione(client)
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
