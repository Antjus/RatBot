module.exports = client => {
    const {  MessageEmbed } = require('discord.js');
    const got = require('got');

    client.on('message', message => {
        if (message.content === "r!meme") {
            const embed = new MessageEmbed()
            got('https://www.reddit.com/r/Ratorix/random/.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                embed.setTitle(`${memeTitle}`)
                embed.setURL(`${memeUrl}`)
                embed.setImage(memeImage)
                embed.setColor('#808080')
                embed.setTimestamp()
                embed.setFooter(`RatBot`, `https://media.discordapp.net/attachments/814582828348080178/814588777720446976/unnamed.jpg`)
                message.channel.send(embed);
            })
        }
        }
    );
    
}