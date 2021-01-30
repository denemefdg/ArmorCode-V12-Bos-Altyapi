const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] Bot Başarıyla Aktif Edildi`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } İsmi İle Sunucuya Giriş Yaptı!`
  );
  client.user.setStatus("idle");
  var oyun = [
    "YT : Aro Design",
    "Armor V12 Boş Altyapı!",
    "ArmorCODE ",
  


  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};
// STATS BÖLÜMÜ
// dnd : Rahatsız Etmeyin
// idle : Boşta
// oline : Online
//  Armor Code