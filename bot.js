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
  warnBuffer: 7,  //MHSTR
  maxBuffer: 8,  //MHSTR
  interval: 1000,  //MHSTR
  warningMessage: "**سيتم طردك إن لم توقف سبام**",  //MHSTR
  banMessage: "تم الطرد بسبب السبام",  //MHSTR
  maxDuplicatesWarning: 7, //NAROX
  maxDuplicatesBan: 10  //NAROX
});
 
bot.login(process.env.BOT_SPAM);
 
const bot1 = new Discord.Client();
 
 var anti_spam1 = require("discord-anti-spam");
anti_spam1(bot1, {
  warnBuffer: 7,  //@N.C™ » MHSTR#1119  //// حقوق مهستر
  maxBuffer: 8,  //@N.C™ » MHSTR#1119
  interval: 1000, //@N.C™ » MHSTR#1119
  warningMessage: "**سيتم طردك إن لم توقف سبام**",  //NAROX codes
  banMessage: "تم الطرد بسبب السبام",  //NAROX codes
  maxDuplicatesWarning: 7,  //NAROX codes
  maxDuplicatesBan: 10  //MHSTR
});
//// MHSTR 2K
 
//@N.C™ » MHSTR#1119
////MHSTR 2K
