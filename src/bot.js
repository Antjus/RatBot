require('dotenv');

const { Client } = require('discord.js');
const client = new Client();
const ban = require('./ban.js');
const invite = require('./invite.js');
const kick = require('./kick.js');
const ping = require('./ping.js');
const social = require('./social.js');

client.on('ready', () => {
    client.user.setStatus('idle');
    console.log('Just created a new RatVerse')

    ban(client)
    kick(client)
    invite(client)
    ping(client)
    social(client)
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
