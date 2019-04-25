const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv/config')
const http = require('http');
const port = process.env.PORT || 3000;
//this is a simple server
http.createServer().listen(port)

const token = process.env.TOKEN

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('meditation music', {type: 'LISTENING'}).catch(console.error);

})

bot.on('message', message => {

    if(message.content.startsWith(`Squish, commands please`)) {
        message.channel.send("Here is the list of commands that you asked for: rules, info, ranks, website, patreon, links, books, email, ping, prefix.");
    }
    if(message.content.startsWith("Squish, can i have a hug?")) {
        message.channel.send("Of course! **hugs**")
    }
    if(message.content.startsWith("Squish, what is the meaning of life?")) {
        message.channel.send("Life has no meaning. Each of us has meaning and we bring it to life. It is a waste to be asking the question when you are the answer.")
    }
    if(message.content.startsWith("Squish, help!")) {
        message.channel.send("I am at your service! Please choose one: *Squish, commands please*; *Squish, can i have a hug?*; *Squish, what is the meaning of life?*")
    }
    if(message.content.startsWith("!prefix")) {
        message.channel.send("The prefix is set to: !")
    }
});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){ 

        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'website':
                message.channel.sendMessage('Please go to tearfulbobcat66.wordpress.com')
            break;
        case 'patreon':
                message.channel.sendMessage('Please go to patreon.com/TearfulBobcat66')
            break;
        case 'links':
                message.channel.sendMessage('Please go to tearfulbobcat66.wordpress.com/about/page/')
            break;
        case 'info':
                message.channel.sendMessage('Please go to #support or contact a member of staff')
            break;    
        case 'ranks':
                message.channel.sendMessage('Please go to #rank-information')
            break;
        case 'rules':
            message.channel.sendMessage('Please revert back to #welcome')
            break;
        case 'books':
            message.channel.sendMessage('Please go to tearfulbobcat66.wordpress.com/books/')
        case 'email':
            message.channel.sendMessage('Please go to tearfulbobcat66.wordpress.com/contact/')
        break;

        case 'clear':
            if(!args[1]) return message.reply('Error. Please define second argument.')
            message.channel.bulkDelete(args[1]);
            break;

        case 'user':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Name', message.author.username)
            .addField('Last Message', message.author.lastMessage)
            .addField('Current Server', message.guild.name)
            .setColor(0x2BFFC2)
            .setThumbnail(message.author.avatarURL)
            .setFooter('SquishBot, created by TearfulBobcat66#9285')
            message.channel.sendEmbed(embed);
        break;
        }
});


bot.login(token);