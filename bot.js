const Discord = require('discord.js');
const client = new Discord.Client();






client.login(process.env.BOT_TOKEN);







client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by tnt');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("onLine");
});





client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$helpadm | shieldbot`)
client.user.setStatus("onLine")
});














client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });







client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تنشر",
        color: 0x06DF00,
        description: "يمنع النشر في هذا السيرفر",
        footer: {
          text: "By TnT"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 














var prefix = "$"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);//thekings

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");//thekings
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");//thekings

  message.guild.member(user).kick();//thekings

  const kickembed = new Discord.RichEmbed()//thekings
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()//thekings
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({//thekings
    embed : kickembed
  })//thekings
}
});






client.on('message', message => {
      if (message.author.bot) return;
      var prefix ="$"
       if (message.content === prefix + "helpadm") {
        if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
       message.channel.send('**تم ارسال رسالة في الخاص**');
  
  
  
  
   message.author.sendMessage(`
   **
             اومر ادمن


[❖...........مسح الجات............❖]
             ❖$clear                
[❖...........الطرد...........❖]
            ❖$kick                 
  
  **
  `);
  
      }
  });


client.on("message", message => {
              var prefix = "$";;
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**❌ ليس لديك رتبة ادمن **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**🚫  MANAGE_MESSAGES ليس لديك رتبة ادمن او بريم 🚫 **');
          var msg;
          msg = parseInt(); ///tnt
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error); ///tnt
        message.channel.sendMessage("", {embed: { ///tnt
          title: "** ➡ تــم مسح الشات ⬅ **",
          color: 0x06DF00,
          footer: { ///tnt
            
          }
        }}).then(msg => {msg.delete(10000)});
                            }
  
       
  });




