const client = require('../index')

const {MessageAttachment, GuildPreview, Role, MessageEmbed}= require("discord.js");
client.on("guildMemberAdd",async(member)=>{
   if(member.guild.memberCount <=2) 
   {
    member.roles.add('935202542508470282');
   }
   else{
      member.roles.add('935202653259046972');
   }
   const channel = member.guild.channels.cache.get('934570523000721449')//welcome message channel id
   const welcomeEmbed =new MessageEmbed()
   .setTitle("**ᴡᴇʟᴄᴏᴍᴇ ɴᴏᴛᴇ**")
   .setDescription(`**${member.displayName} Welcome to ${member.guild.name}\nWe now have ${member.guild.memberCount} Members`)
   .setColor("RED")
   .setThumbnail('https://cdn.discordapp.com/attachments/934763030892412968/934934488625070150/MalikSellzStuff_1.png')
   .setImage ('https://images-ext-2.discordapp.net/external/WqOlhFd2TF-x2xQthAazIxY2ABW-CLAVag38JfltK5A/https/media.discordapp.net/attachments/916225054390513695/916565398298701844/GIF_AN_1.gif')
   //.setFooter(`ᴀɴɴᴏᴜɴᴄᴇᴅ ʙʏ ${admin.username} `)
   channel.send({ embeds: [welcomeEmbed] })
});