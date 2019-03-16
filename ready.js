const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Tüm komutlar çalıştırılıyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı! BOT aktif!`);
  client.user.setStatus("online");
   var oyun = [
        "+yardım | 7/24 aktif!",
        "Müzik komutları | Çal çal oyna",
        "Yapımcı: Metehan Salman",
        "DC: ßǤ | MetehanSalmannn#5750",
        "HER ZAMAN HER YERDE DAHA İLERİYE",
        "+davet yaz ve bize destek ol!",
        "+sunucutanıt yaz ve sunucunu tanıt!",
        "+kurulum yaz ve bot için gerekli kanalları kur!",
        `${client.users.size} kullanıcıya hizmet veriyor.`,
        `${client.guilds.size} sunucuya hizmet veriyor.`

    ];

}