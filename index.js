const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("dnd");
  client.user.setGame("/network help | MigServer Bot");
  console.log("Reload Completed!");
});

const bo = client.emojis.get("online", "online").toString;
const prefix = "/network ";
client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;

  if (message.content === (prefix + "discord")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Discord:__\n \n",
      description: "** **\nhttps://discord.gg/JuuVp5D",
      footer: 
      {
          text: "MigServer Network"
      }
    }});
  } else
  if (message.content === (prefix + "apply")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Apply:__\n \n",
      description: "** **\nhttps://docs.google.com/forms/d/e/1FAIpQLSdAcbc6iCUbI_YnKiMAKwXVxl87nuDJFb5WbA_Mutthrw4BDw/viewform",
      footer: 
      {
          text: "MigServer Network"
      }
    }});
  } else
  if (message.content === (prefix + "creator")) {
    message.channel.send("The Creator of the Bot is `Derpy#6522`");
  } else
  if (message.content === (prefix + "invite")) {
    message.author.sendMessage("**__Invite The Bot:__**\n \nhttps://discordapp.com/api/oauth2/authorize?client_id=426357120993198090&permissions=0&scope=bot");
  } else
  if (message.content === (prefix + "youtube")) {
    message.channel.send("**__Youtube Cahnnel:__**\n \nhttps://www.youtube.com/channel/UCuPaetf28pN6knc1MdpriCg?view_as=subscriber");
  } else
  if (message.content === (prefix + "help")) {
    message.author.sendMessage({embed: {
     color: 3447003,
     title: "__MigServer Commands:__\n \n",
     description: "** **\n**/network discord ** - Discord Link\n**/network creator** - The Creators of the Bot\n**/network apply** - Staff Apply\n**/network ping** - Show to you how much Ping you have\n**/network invite** - Invite the Bot\n**/network youtube** - Show to you the link to Youtube Channel\n**/network avatar** - show your avatar profile\n**/network ranks** - Show to you the Ranks list of the Server\n**/network help** - Show this Menu",
     footer: 
     {
         text: "MigServer Network"
     }
   }});
    message.reply("Please check your direct messages :mailbox_with_no_mail:");
  } else
  if (message.content === (prefix + "ranks")) {
    message.author.sendMessage({embed: {
     color: 3447003,
     title: "__MigServer Ranks:__\n \n",
     description: "** **\n**OWNER**\n**CO-OWNER**\n**MANAGER**\n**S-MANAGER**\n**D-MANAGER**\n**DEV**\n**H-ADMIN**\n**ADMIN**\n**M-MANAGER**\n**MOD**\n**HELPER**\n**B-MANAGER**\n**BUILDER**\n**YOUTUBER**\n**LEGEND**\n**SUPER**\n**HERO+**\n**HERO**\n**VIP+**\n**VIP**\n**MEMBER**",
     footer: 
     {
         text: "MigServer Network"
     }
   }});
    message.reply("Please check your direct messages :mailbox_with_no_mail:");
  }
});

  client.on('message', message => {
    if (message.content === `/network ping`) {
      message.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`);
    }
  });

  client.on('message', message => {
    if (message.content === '/network avatar') {
      message.reply(message.author.avatarURL);
    }
  });

  client.on('message', message => {
    if (message.content === '/network test') {
      message.reply("I am Online :online:");
    }
  });

    if(command === "kick") {
      // This command must be limited to mods and admins. In this example we just hardcode the role names.
      // Please read on Array.some() to understand this bit: 
      // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
      if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
    
      // Let's first check if we have a member and if we can kick them!
      // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
      let member = message.mentions.members.first();
      if(!member)
        return message.reply("Please mention a valid member of this server");
      if(!member.kickable) 
        return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
      // slice(1) removes the first part, which here should be the user mention!
      let reason = args.slice(1).join(' ');
      if(!reason)
        return message.reply("Please indicate a reason for the kick!");
    
      // Now, time for a swift kick in the nuts!
      await member.kick(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

    }

client.login(process.env.BOT_TOKEN);
