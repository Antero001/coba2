exports.menu = (prefix, l) => { 
return `     ──「 *SEMUA FITUR* 」──\n\n
  • *Fitur Utama Pada ${global.userbot['setting'].botname}*
*Tokoh Islam & Para Wali:*
${l++}. ${prefix}daftarkaromah
${l++}. ${prefix}daftarnamawalisongo
${l++}. ${prefix}daftarsyuhadaislam
${l++}. ${prefix}tokohislam
${l++}. ${prefix}sahabatnabi
*Tuntunan Sholat Lengkap:*
${l++}. ${prefix}mandiwajib
${l++}. ${prefix}wudhu
${l++}. ${prefix}tayamum\n
  • *Perintah Khusus Owner*
*Setelan Pada Bot:*
${l++}. ${prefix}setmenu
*Message:*
${l++}. ${prefix}clearchat
${l++}. ${prefix}deletechat
${l++}. ${prefix}archivechat
${l++}. ${prefix}unarchivechat
${l++}. ${prefix}clearallchat
${l++}. ${prefix}deleteallchat
${l++}. ${prefix}arciveallchat
${l++}. ${prefix}unarchiveallchat
*Broadcast:*
${l++}. ${prefix}bc text
*Attack:*
${l++}. ${prefix}spam text|jumlah\n
  • *Perintah Khusus Pengguna*
*Info Dakwah Bot:*
${l++}. ${prefix}owner
${l++}. ${prefix}status
${l++}. ${prefix}changelog
${l++}. ${prefix}credits
${l++}. ${prefix}rules
${l++}. ${prefix}speed
${l++}. ${prefix}runtime
*Perintah Sticker:*
${l++}. ${prefix}listcmd
${l++}. ${prefix}setcmd cmd
${l++}. ${prefix}delcmd cmd
*Fitur Media:*
${l++}. ${prefix}sticker judul|pembuat
*Alat Pengukur/Penghitung:*
${l++}. ${prefix}calendermasehi
${l++}. ${prefix}calenderhijriyah
${l++}. ${prefix}zodiak tahun bulan tanggal
*Perinta Dalam Grup:*
${l++}. ${prefix}buka
${l++}. ${prefix}tutup
${l++}. ${prefix}listonline
*Aksesbilitasi:*
${l++}. ${prefix}antilinkgroup
`
}

exports.donasi = () => {
return `*「 💰 」 Tolong Bantuan donasi, Walaupun Sekecil Biji Zarrah*\n
*Rasulullah SAW bersabda: “Harta tidak akan berkurang karena sedekah. Dan seorang hamba yang memiliki sifat pemaaf pasti akan Allah tambahkan kewibawaan baginya” (HR. Muslim, no. 2588).*\n
*Donasi: https:/\/\saweria.co/Arifirazzaq2001*
`
}

exports.rules = (x) => {
return `「 *𝗥𝗨𝗟𝗘𝗦 𝗕𝗔𝗚𝗜 𝗣𝗘𝗡𝗚𝗚𝗨𝗡𝗔 𝗕𝗢𝗧* 」
    
${x++}. Tolong Kasih Jeda Bot, Dan Jangan Spam Saat Menggunakan Bot.
${x++}. Call/VC Bot Auto Block.
${x++}. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
${x++}. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
${x++}. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
${x++}. Kalian juga bisa menbuat bot sendiri caranya liat yt owner Arifi Razzaq OFFICIAL
${x++}. Konsekuensi Bila Melanggar Rules, Bot Akan Memblokir Kamu Atau Mengeluarkan Kamu Dari Grup.
`
}