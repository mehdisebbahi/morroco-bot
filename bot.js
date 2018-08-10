const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");

A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
سلام عليكم
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/teKnWcX ]
الدعووة خاصة لك ... [ MedoxYT  ]
**`)
}).catch(console.error)
})
A7MD.login('NDc1NzcxMDcxNjM1NjUyNjE5.DknEww.zKaF0d9wCsLne8JHDgn3W96N5LQ');
