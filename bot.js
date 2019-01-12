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
client.user.setStatus("dnd");
});




var anti_spam = require("discord-anti-spam");
 
anti_spam(bot, {
  warnBuffer: 7,  
  maxBuffer: 8,  
  interval: 1000,  
  warningMessage: "**سيتم طردك إن لم توقف سبام**",  
  banMessage: "تم الطرد بسبب السبام",  
  maxDuplicatesWarning: 7, 
  maxDuplicatesBan: 10  
});
 
bot.login(process.env.BOT_SPAM);
 
const bot1 = new Discord.Client();
 
 var anti_spam1 = require("discord-anti-spam");
anti_spam1(bot1, {
  warnBuffer: 7,  //@TnT » TnT#5855  /// TnT
  maxBuffer: 8,  //@TnT » TnT#5855
  interval: 1000, //@TnT » TnT#5855
  warningMessage: "**سيتم طردك إن لم توقف سبام**",  
  banMessage: "تم الطرد بسبب السبام",  
  maxDuplicatesWarning: 7,  
  maxDuplicatesBan: 10  
});



