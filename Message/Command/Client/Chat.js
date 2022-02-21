'use strict';
require("dotenv").config();
const { isUser, addUser } = require('../../../Message/Whatsapp/Functions/user.js');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('../../../Message/Whatsapp/Functions/banned.js');
const { addBalance, lessBalance, checkBalance } = require('../../../Message/Whatsapp/Functions/balance.js');
const { sleep, isAfk, cekafk, addafk } = require('../../../Message/Whatsapp/Functions/offline.js');
const { isLimit, limitAdd, getLimit, giveLimit, addBalanceReguler, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('../../../Message/Whatsapp/Functions/limitReguler.js');
const { addVote, delVote } = require('../../../Message/Whatsapp/Functions/vote.js');
const { cmdadd } = require('../../../Message/Whatsapp/Functions/totalcmd.js');
const { _scommand, addCmd, getCommandPosition, checkscommand, getCmd } = require('../../../Message/Whatsapp/Functions/stickCMD.js');
const { kyun, time, WIB, WITA, WIT, weton, week, date, waktu, tanggal, formatDate, dateIslamic } = require('../../../Message/Whatsapp/Functions/moment.js');
const { bayarPotion, addPotioUser, potionAdd } = require('../../../Message/Whatsapp/Functions/potion.js');
const { bayarHeal, addHealUser, healAdd } = require('../../../Message/Whatsapp/Functions/adventure.js');
const { isGained, xpGain, addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('../../../Message/Whatsapp/Functions/leveling.js');
const { _registered, isRegistered, checkRegisteredUser, addRegisteredUser, getRegisteredRandomId, createSerial } = require('../../../Message/Whatsapp/Functions/registFunc.js');
const { getPengunjung, addPengunjung, cekPengunjung } = require('../../../Message/Whatsapp/Functions/readbot.js');
module.exports = {
    async chatUpdate(conn, chat) {
        if (!chat.hasNewMessage) return
        let m = chat.messages.all()[0]
        if (m.messageStubType) {
            if (m.messageStubType == 68) {
                  await conn.clearMessage(m.key)
            }
        }
        if (!m.message) return
        if (m.key && m.key.remoteJid == 'status@broadcast') return
        await global['func'].smsg(conn, m)
        await global['func'].serialize(conn, m)
        if (m.message && m.isBaileys && m.isQuotedMsg && m.quotedMsg.type === 'orderMessage') {
              await conn.clearMessage(m.key)
        }
           switch (m.type) {
                case global['mediaType'].image:
                case global['mediaType'].video:
                case global['mediaType'].audio:
                case global['mediaType'].sticker:
                    if (!m.fromMe) await global['func'].sleep(1000)
                    if (!m.message[m.type].url) await conn.updateMediaMessage(m);
                    break;
                  }
              let msgChat = {
                  grup: global.userbot['setting'].KhususGrup,
                  admin: global.userbot['setting'].KhususOwner,
                  premium: global.userbot['setting'].KhususPremium,
                  botAdmin: global.userbot['setting'].BotAdmin,
                  grupAdmin: global.userbot['setting'].GrupAdmin,
                  owner: global.userbot['setting'].KhususOwner,
                  adminBebas: global.userbot['setting'].FreeAdmin, 
                  aktifSebelumnya: global.userbot['setting'].SudahAktif, 
                  deaktifSebelumnya: global.userbot['setting'].SudahNonaktif,
                  aktif: global.userbot['setting'].aktif, 
                  nonaktif: global.userbot['setting'].nonaktif,
                  wait: global.userbot['setting'].wait,
                  banned: global.userbot['setting'].banned, 
                  apiError: global.userbot['setting'].api, 
                  succes: global.userbot['setting'].success, 
                  NaN: global.userbot['setting'].NaN, 
                  tombolError: global.userbot['error'].tombol,
                  prameterError: global.userbot['error'].forget,
                  urlError: global.userbot['error'].forgetUrl, 
               }
           try {
                 const { type, quotedMsg, isGroup, isQuotedMsg, mentioned, sender, from, fromMe, pushname, chats, budy, isBaileys } = m;
                 const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, listMessage, buttonsMessage, contactsArrayMessage } = global.mediaType;
            if (m.isBaileys) return
                 conn.l = 1;
                 conn.timestamp = global.Ft['speed']();
                 conn.latensi = global.Ft['speed']() - conn.timestamp;
                 conn.args = await chats.split(' ');
                 conn.command = await chats.toLowerCase().split(' ')[0] || '';
            if (conn.multi) {
                 conn.prefix = /^[°•π÷×¶∆£¢€¥®™✓_|~!?#%^&.+-,\/\\©^]/.test(conn.command) ? conn.command.match(/^[°•π÷×¶∆£¢€¥®™✓_|~!?#$%^&.+-,\/\\©^]/gi) : '#';
                  } else {
            if (conn.nopref) {
                 conn.prefix = conn.nopref;
                  } else {
                 conn.prefix = conn.prefa;
                 }
              }
                await conn.chatRead(m.key.remoteJid, "read");
          try {
                var img = await conn.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`);
                 } catch {
                var img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPf7ddd8KiWOdrwLSDoBdWnScTp1jiDZOENQ&usqp=CAUl';
              }
                conn.buff = await global['func'].getBuffer(img);
                conn.isCmd = await conn.command.startsWith(conn.prefix);
                conn.q = await chats.slice(conn.command.length + 1, chats.length);
                conn.body = await chats.startsWith(conn.prefix) ? chats : ''
                conn.totalchat = await conn.chats.all()
                conn.yourName = await conn.getName(sender);
                conn.groupData = isGroup ? await conn.groupMetadata(m.key.remoteJid) : ''
                conn.groupName = isGroup ? await conn.groupData.subject : ''
                conn.groupId = isGroup ? await conn.groupData.jid : ''
                conn.groupMembers = isGroup ? await conn.groupData.participants : ''
                conn.groupAdmins = isGroup ? await global['func'].getGroupAdmins(conn.groupMembers) : ''
                conn.isOwner = await conn.ownerArray.map(v => v + '@s.whatsapp.net').includes(sender);
                conn.isPengunjung = await global['pengunjung'].includes(sender)
                conn.isCatchPengunjung = cekPengunjung(sender)
                conn.isBotGroupAdmins = await conn.groupAdmins.includes(conn.user.jid) || false;
                conn.isGroupAdmins = await conn.groupAdmins.includes(sender) || false;
                conn.isImage = (type === 'imageMessage');
                conn.isAudio = (type === 'audioMessage');
                conn.isVideo = (type === 'videoMessage');
                conn.isSticker = (type == 'stickerMessage');
                conn.isDocument = (type == 'documentMessage');
                conn.isMedia = conn.isImage || conn.isVideo || conn.isSticker || (type == 'audioMessage') || (type == 'documentMessage');
                conn.isQuotedDocument = isQuotedMsg ? (quotedMsg.type === 'documentMessage') ? true : false : false;
                conn.isQuotedImage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false;
                conn.isQuotedAudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false;
                conn.isQuotedVideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false;
                conn.isQuotedSticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false;
                conn.isButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
                conn.isListMessage = (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
         
         function monospace(string) {
              return '```' + string + '```'
            }
            
         const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
                  if (conn.isCmd) {
                       global['pengunjung'].push(sender)
                     global.Ft['fs'].writeFileSync('./Database/pengunjung.json', JSON.stringify(global['pengunjung']))
                   addPengunjung(sender, createSerial(20))
                }
                  if (budy.includes("://chat.whatsapp.com/")){
                if (!isGroup) return 
              if (conn.isGroupAdmins) return await conn.reply(from, msgChat.adminBebas, m)
                   let { Presence } = require('@adiwajshing/baileys')
                         await conn.updatePresence(from, Presence.composing)
	                       let kic = `${sender.split("@")[0]}@s.whatsapp.net`
	                          let caption = `「 *GROUP LINK DETECTED* 」\n\n` + '• *Pengirim*' + ' *' + global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY' + ' | ' + 'HH:mm:ss') + '* \n' + `${monospace(`Username : ${pushname.slice(0, 12)}`)}\n` + `${monospace(`Nomer : 0${sender.split('@')[0].slice(2, 99)}`)}\n` + `${monospace(`Tag : @${sender.split("@")[0]}`)}\n\n` + `*${pushname.slice(0, 12)},* *Maaf Anda Di Keluarkan Dalam Grup ${conn.groupName}*\n`
                                await conn.reply(from, caption, m, { contextInfo : { mentionedJid: (await global['func'].parseMention(caption), [m.sender])} })
                                 if (!conn.isBotGroupAdmins) return await conn.reply(from, msgChat.botAdmin, m)
	                                  await conn.groupRemove(from, [kic]).catch((e)=> conn.logger.error(e))
	                            await conn.send2ButtonLoc(m.sender, conn.buff, `「 *BACA PERATURAN GC* 」 Lain kali Kalau Masuk Grup, Di Baca Dulu Peraturannya Ya Kak...`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
	                          }
	                  if (budy.includes("t.me/")){
                if (!isGroup) return 
              if (conn.isGroupAdmins) return await conn.reply(from, msgChat.adminBebas, m)
                   let { Presence } = require('@adiwajshing/baileys')
                         await conn.updatePresence(from, Presence.composing)
	                       let kic = `${sender.split("@")[0]}@s.whatsapp.net`
	                          let caption = `「 *TELEGRAM LINK DETECTED* 」\n\n` + '• *Pengirim*' + ' *' + global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY' + ' | ' + 'HH:mm:ss') + '* \n' + `${monospace(`Username : ${pushname.slice(0, 12)}`)}\n` + `${monospace(`Nomer : 0${sender.split('@')[0].slice(2, 99)}`)}\n` + `${monospace(`Tag : @${sender.split("@")[0]}`)}\n\n` + `*${pushname.slice(0, 12)},* *Maaf Anda Di Keluarkan Dalam Grup ${conn.groupName}*\n`
                                await conn.reply(from, caption, m, { contextInfo : { mentionedJid: (await global['func'].parseMention(caption), [m.sender])} })
                                 if (!conn.isBotGroupAdmins) return await conn.reply(from, msgChat.botAdmin, m)
	                                  await conn.groupRemove(from, [kic]).catch((e)=> conn.logger.error(e))
	                            await conn.send2ButtonLoc(m.sender, conn.buff, `「 *BACA PERATURAN GC* 」 Lain kali Kalau Masuk Grup, Di Baca Dulu Peraturannya Ya Kak...`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
	                          }
	                  if (budy.includes("instagram.com/")){
                if (!isGroup) return 
              if (conn.isGroupAdmins) return await conn.reply(from, msgChat.adminBebas, m)
                   let { Presence } = require('@adiwajshing/baileys')
                         await conn.updatePresence(from, Presence.composing)
	                       let kic = `${sender.split("@")[0]}@s.whatsapp.net`
	                          let caption = `「 *INSTAGRAM LINK DETECTED* 」\n\n` + '• *Pengirim*' + ' *' + global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY' + ' | ' + 'HH:mm:ss') + '* \n' + `${monospace(`Username : ${pushname.slice(0, 12)}`)}\n` + `${monospace(`Nomer : 0${sender.split('@')[0].slice(2, 99)}`)}\n` + `${monospace(`Tag : @${sender.split("@")[0]}`)}\n\n` + `*${pushname.slice(0, 12)},* *Maaf Anda Di Keluarkan Dalam Grup ${conn.groupName}*\n`
                                await conn.reply(from, caption, m, { contextInfo : { mentionedJid: (await global['func'].parseMention(caption), [m.sender])} })
                                 if (!conn.isBotGroupAdmins) return await conn.reply(from, msgChat.botAdmin, m)
	                                  await conn.groupRemove(from, [kic]).catch((e)=> conn.logger.error(e))
	                            await conn.send2ButtonLoc(m.sender, conn.buff, `「 *BACA PERATURAN GC* 」 Lain kali Kalau Masuk Grup, Di Baca Dulu Peraturannya Ya Kak...`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
	                          }
	                  if (budy.includes("://youtube.com/channel/")){
                if (!isGroup) return 
              if (conn.isGroupAdmins) return await conn.reply(from, msgChat.adminBebas, m)
                   let { Presence } = require('@adiwajshing/baileys')
                         await conn.updatePresence(from, Presence.composing)
	                       let kic = `${sender.split("@")[0]}@s.whatsapp.net`
	                          let caption = `「 *YOUTUBE CHANNEL LINK DETECTED* 」\n\n` + '• *Pengirim*' + ' *' + global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY' + ' | ' + 'HH:mm:ss') + '* \n' + `${monospace(`Username : ${pushname.slice(0, 12)}`)}\n` + `${monospace(`Nomer : 0${sender.split('@')[0].slice(2, 99)}`)}\n` + `${monospace(`Tag : @${sender.split("@")[0]}`)}\n\n` + `*${pushname.slice(0, 12)},* *Maaf Anda Di Keluarkan Dalam Grup ${conn.groupName}*\n`
                                await conn.reply(from, caption, m, { contextInfo : { mentionedJid: (await global['func'].parseMention(caption), [m.sender])} })
                                 if (!conn.isBotGroupAdmins) return await conn.reply(from, msgChat.botAdmin, m)
	                                  await conn.groupRemove(from, [kic]).catch((e)=> conn.logger.error(e))
	                            await conn.send2ButtonLoc(m.sender, conn.buff, `「 *BACA PERATURAN GC* 」 Lain kali Kalau Masuk Grup, Di Baca Dulu Peraturannya Ya Kak...`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
	                          }
	                  if (budy.includes("://youtu.be/")){
                if (!isGroup) return 
              if (conn.isGroupAdmins) return await m.reply(msgChat.adminBebas)
                   let { Presence } = require('@adiwajshing/baileys')
                         await conn.updatePresence(from, Presence.composing)
	                       let kic = `${sender.split("@")[0]}@s.whatsapp.net`
	                          let caption = `「 *YOUTUBE VIDEO LINK DETECTED* 」\n\n` + '• *Pengirim*' + ' *' + global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY' + ' | ' + 'HH:mm:ss') + '* \n' + `${monospace(`Username : ${pushname.slice(0, 12)}`)}\n` + `${monospace(`Nomer : 0${sender.split('@')[0].slice(2, 99)}`)}\n` + `${monospace(`Tag : @${sender.split("@")[0]}`)}\n\n` + `*${pushname.slice(0, 12)},* *Maaf Anda Di Keluarkan Dalam Grup ${conn.groupName}*\n`
                                await conn.reply(from, caption, m, { contextInfo : { mentionedJid: (await global['func'].parseMention(caption), [m.sender])} })
                                 if (!conn.isBotGroupAdmins) return await conn.reply(from, msgChat.botAdmin, m)
	                                  await conn.groupRemove(from, [kic]).catch((e)=> conn.logger.error(e))
	                            await conn.send2ButtonLoc(m.sender, conn.buff, `「 *BACA PERATURAN GC* 」 Lain kali Kalau Masuk Grup, Di Baca Dulu Peraturannya Ya Kak...`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
	                          }
	                  if (/^(kntl(bacot(anj?ing?Ng)asu)kanjut)/i.test(budy)) {
                if (!isGroup) return 
              if (conn.isGroupAdmins) return await conn.reply(from, msgChat.adminBebas, m)
                   let { Presence } = require('@adiwajshing/baileys')
                         await conn.updatePresence(from, Presence.composing)
	                       let kic = `${sender.split("@")[0]}@s.whatsapp.net`
	                          let caption = `「 *HASH WORD DETECTED* 」\n\n` + '• *Pengirim*' + ' *' + global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY' + ' | ' + 'HH:mm:ss') + '* \n' + `${monospace(`Username : ${pushname.slice(0, 12)}`)}\n` + `${monospace(`Nomer : 0${sender.split('@')[0].slice(2, 99)}`)}\n` + `${monospace(`Tag : @${sender.split("@")[0]}`)}\n\n` + `*${pushname.slice(0, 12)},* *Maaf Anda Di Keluarkan Dalam Grup ${conn.groupName}*\n`
                                await conn.reply(from, caption, m, { contextInfo : { mentionedJid: (await global['func'].parseMention(caption), [m.sender])} })
                                 if (!conn.isBotGroupAdmins) return await conn.reply(from, msgChat.botAdmin, m)
	                                  await conn.groupRemove(from, [kic]).catch((e)=> conn.logger.error(e))
	                            await conn.send2ButtonLoc(m.sender, conn.buff, `「 *BACA PERATURAN GC* 」 Lain kali Kalau Masuk Grup, Di Baca Dulu Peraturannya Ya Kak...`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
	                          }
	                  if (m.message && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
                if (!isGroup) return 
              if (conn.isGroupAdmins) return await conn.reply(from, msgChat.adminBebas, m)
                   let { Presence } = require('@adiwajshing/baileys')
                         await conn.updatePresence(from, Presence.composing)
	                       let kic = `${sender.split("@")[0]}@s.whatsapp.net`
	                          await m.reply('Fake Troli Detected\n\n' + require('util').format(m.key))
                                 if (!conn.isBotGroupAdmins) return await conn.reply(from, msgChat.botAdmin, m)
	                                  await conn.groupRemove(from, [kic]).catch((e)=> conn.logger.error(e))
	                            await conn.send2ButtonLoc(m.sender, conn.buff, `「 *BACA PERATURAN GC* 」 Lain kali Kalau Masuk Grup, Di Baca Dulu Peraturannya Ya Kak...`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
	                          }
	                  if (budy && budy.length >= 15000) {
                if (m.sender == con.user.jid) return false
                if (!isGroup) return 
              if (conn.isGroupAdmins) return await conn.reply(from, msgChat.adminBebas, m)
                   let { Presence } = require('@adiwajshing/baileys')
                         await conn.updatePresence(from, Presence.composing)
	                       let kic = `${sender.split("@")[0]}@s.whatsapp.net`
	                          let caption = `「 *TEXT VIRUS DETECTED* 」\n\n` + '• *Pengirim*' + ' *' + global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY' + ' | ' + 'HH:mm:ss') + '* \n' + `${monospace(`Username : ${pushname.slice(0, 12)}`)}\n` + `${monospace(`Nomer : 0${sender.split('@')[0].slice(2, 99)}`)}\n` + `${monospace(`Tag : @${sender.split("@")[0]}`)}\n\n` + `*${pushname.slice(0, 12)},* *Maaf Anda Di Keluarkan Dalam Grup ${conn.groupName}*\n`
                                await m.reply(m.clear)
                             await m.reply(`Maaf @${m.sender.split("@")[0]} *Virtex Terdeteksi!*\n_Maaf Anda Di Kick._`)
                                 if (!conn.isBotGroupAdmins) return await conn.reply(from, msgChat.botAdmin, m)
	                                  await conn.groupRemove(from, [kic]).catch((e)=> conn.logger.error(e))
	                            await conn.send2ButtonLoc(m.sender, conn.buff, `「 *BACA PERATURAN GC* 」 Lain kali Kalau Masuk Grup, Di Baca Dulu Peraturannya Ya Kak...`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
	                          }
                  if (m.chat.endsWith('broadcast')) {
                if (m.fromMe) {
              if (m.isGroup) {
                     JSON.parse(global.Ft['fs'].readFileSync('./Database/firstchat.json')).push(m.sender, + date )
                        global.Ft['fs'].writeFileSync('./Database/firstchat.json', JSON.stringify(JSON.parse(global.Ft['fs'].readFileSync('./Database/firstchat.json'))))
                             if ( date - pc < 86400000 ) {
                                    await conn.send2ButtonLoc(m.chat, conn.buff, `Hai ${conn.getName(m.sender)} ${global.Ft['ucapan']()}\n\nSaya adalah ${global.userbot['setting'].botname}\nKalau ingin tahu Fitur lainnya klik tombol dibawah ya`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
                                 }
                              }
                           }
                        }
                  if (m.mentionedJid.includes(conn.user.jid) && m.isGroup) {
                          await conn.send2Button(m.chat, `Halo ${conn.getName(m.sender)} Ada yang Bisa saya Bantu?`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
                        }
                  if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
                          await m.reply(`*INGIN MENGUNDANG BOT KE GRUP ANDA?*\nIzin Ke Owner Dulu ya!\nJangan Lupa Donasi Bot Biar on terus`)
                             await conn.sendContact(m.chat, global['userbot'].owner[0], "CREATOR BOT", m).then(() => {
                                conn.sendMessage(global['userbot'].owner[0] + "@s.whatsapp.net", "Seseorang Mengirim Undangan Grup", global.mediaType["text"])
                            })
                        }
                  if (global.antidelete) {
                          await conn.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
                        }
                  if (/^https?:\/\/.*chat.whatsapp/i.test(budy)){
                        let [_, code] = budy.match(linkRegex) || []
                            if (!code) return m.reply('Link invalid')
                                  let res = await conn.acceptInvite(code)
                              await m.reply(`Berhasil join grup ${res.gid}`)
                          }
                  if (conn.isOwner) {
                     if (chats.startsWith("> ")) {
                           console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mEVAL\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss')), global.Ft['chalk'].bold.white('no:'), global.Ft['chalk'].bold.rgb(230, 113, 181)(sender.split("@")[0]), global.Ft['chalk'].bold.white('from:'), global.Ft['chalk'].bold.rgb(0, 170, 255)(pushname), global.Ft['chalk'].bold.white('in:'), global['Ft'].color('Perintah Dari Owner'), global.Ft['chalk'].bold.white('args:'), global.Ft['chalk'].bold.white('[' + global['Ft'].color(conn.args.length) + global.Ft['chalk'].bold.white(']')));
                            try {
                                 let evaled = await eval(chats.slice(2))
                                 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                                     await conn.sendMessage(m.key.remoteJid, `${evaled}`, extendedText, { quoted: m })
                                      } catch (err) {
                                     await conn.sendMessage(m.key.remoteJid, `${err}`, extendedText, { quoted: m })
                                   }
	                            } else if (chats.startsWith('=> ')) {
                            console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mEVAL\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss')), global.Ft['chalk'].bold.white('no:'), global.Ft['chalk'].bold.rgb(230, 113, 181)(sender.split("@")[0]), global.Ft['chalk'].bold.white('from:'), global.Ft['chalk'].bold.rgb(0, 170, 255)(pushname), global.Ft['chalk'].bold.white('in:'), global['Ft'].color('Perintah Dari Owner'), global.Ft['chalk'].bold.white('args:'), global.Ft['chalk'].bold.white('[' + global['Ft'].color(conn.args.length) + global.Ft['chalk'].bold.white(']')));
                            try {
                                 let evaled = await eval(`(async () => { ${chats.slice(3)} })()`)
                                 if (typeof evaled !== 'string' ) evaled = require('util').inspect(evaled);
                                     await conn.reply(from, `${evaled}`, m)
                                      } catch (err) {
                                     await conn.reply(from, `${err}`, m)
                                   } 
                                } else if (chats.startsWith("$ ")) {
	                        console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mEXEC\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss')), global.Ft['chalk'].bold.white('no:'), global.Ft['chalk'].bold.rgb(230, 113, 181)(sender.split("@")[0]), global.Ft['chalk'].bold.white('from:'), global.Ft['chalk'].bold.rgb(0, 170, 255)(pushname), global.Ft['chalk'].bold.white('in:'), global['Ft'].color('Perintah Dari Owner'), global.Ft['chalk'].bold.white('args:'), global.Ft['chalk'].bold.white('[' + global['Ft'].color(conn.args.length) + global.Ft['chalk'].bold.white(']')));
                            global['Ft'].exec(chats.slice(2), (err, stdout) => {
                                if (err) return conn.reply(from, stdout, m) 
                                if (stdout) conn.reply(from, stdout, m)
                                    })
                                 }
	                          }
    if (conn.isButton === 'menu') {
            let listMsg = {
                title: `${global.userbot['setting'].botname}`, 
                buttonText: 'CLICK HERE',
                footerText: global.userbot['setting'].packname,
                description: `👋🏻 Halo @${sender.split('@')[0]} Silahkan Pilih Menu Di Bawah!`,
                sections: [
                {
                "title": `DEFAULT COMMAND`,
                "rows" : [
                {
                "title": "API WHATSAPP & SCRAPE WEB",
                "description": "\nMenampilkan Fitur Utama Pada Bot, Di gunakan Untuk Umum Baik Private Chat Maupun Group Chat.",
                "rowId": "menu"
                }]
                },{
                "title": `PEDIA STORE`,
                "rows" : [
                {
                "title": "TOPUP GAMING & PANEL MEDIA SOCIAL",
                "description": "\nSilahkan Deposit Untuk Belanja, Jadilah Reseller Kami, Dan Pasang Harga Keuntungan Hingga 80%, Setiap Pembelian.", 
                "rowId": "store"
                }]
                },{
                "title": `TALENT MANAGEMENT`, 
                "rows" : [
                {
                "title": "MANAGEMENT SELEBGRAM INDONESIA",
                "description": "\nDisini Adalah Informasi Database Kamu Dalam Management Selebgram.", 
                "rowId": "talent"
                }]
                }
                ],
                listType: 1
            }
            await conn.sendMessage(m.key.remoteJid, listMsg, global.mediaType['listMessage'], { contextInfo: { mentionedJid: [sender] }, quoted: m })
          }
     if (conn.isButton === 'founder') {
              for (let i of conn.ownerArray.map(v => v + '@s.whatsapp.net')) {
                let vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
              conn.conarray.push({ "displayName": global.userbot['setting'].author, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` })
            }
            await conn.sendMessage(m.chat, { "displayName": `${conn.conarray.length} kontak`, "contacts": conn.conarray }, "contactsArrayMessage", { quoted: m })
            await conn.sendMessage(m.chat, 'Silahkan Tinggalkan Pesan Anda Pada Owner Kami!', extendedText, { quoted: m })
          }
     if (conn.isButton === 'changelog') {
            await conn.send2ButtonLoc(m.key.remoteJid, await ( await global['Ft'].fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuEathu2vH-ihguVxa6Qj4U70x6gcw0Nc8g&usqp=CAU')).buffer(), `Changelog\ntanggal: ${date}\nversi saat ini *${global['pkgg'].version}*\n\n${global['PA'].changelog == '' ? 'Tidak ada changelog yang di tambahkan' : '' || global['PA'].changelog }\n`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
          }
     if (conn.isButton === 'donasi') {
              let listMsg = {
                title: `${global.userbot['setting'].botname}`, 
                buttonText: 'CLICK HERE',
                footerText: global.userbot['setting'].packname,
                description: `👋🏻 Halo @${sender.split('@')[0]} Mau Donasi Ke mana?`,
                sections: [
                {
                "title": `DONASI INFAQ`,
                "rows" : [
                {
                "title": "PONDOK PESANTREN ~ TAHFIZHUL QUR'AN",
                "description": "\nInfaq Pembangunan Biaya Pendidikan Yatim & Dhu'afa Operasional Dakwah Bakti Sosial.",
                "rowId": "donasiinfaq"
                }]
                },{
                "title": `DONASI BOT`,
                "rows" : [
                {
                "title": "STREAM BOT ~ ARIFI RAZZAQ OFFICIAL",
                "description": "\nAgar Bot Selalu Aktif, Untuk Kebutuhan Operasional Systems Pada Bot Whatsapp.", 
                "rowId": "donasibot"
                }]
                }
                ],
                listType: 1
            }
            await conn.sendMessage(m.key.remoteJid, listMsg, global.mediaType['listMessage'], { contextInfo: { mentionedJid: [sender] }, quoted: m })
          }
     if (conn.isButton === 'ovo') {
            await conn.send2Button(m.sender, 'Terimakasih Sudah Mau Donasi\nSilahkan Transfer Ke Nomor OVO di Bawah\n\n*NO :* 0812-6132-4817\n*A/N :* ARIFI RAZZAQ', global.userbot['setting'].packname, 'Via Saweria.co', 'saweria', 'Sudah Donasi', 'donasidone',m)
            if (isGroup) {
              await conn.sendMessage(m.key.remoteJid, 'Silahkan Cek Pesan Pribadi Anda, Dari Nomor Bot!', extendedText, { quoted: m })
            }
          }
     if (conn.isButton === 'gopay') {
            await conn.send2Button(m.sender, 'Terimakasih Sudah Mau Donasi\nSilahkan Transfer Ke Nomor GOPAY di Bawah\n\n*NO :* 0812-6132-4817\n*A/N :* ARIFI RAZZAQ', global.userbot['setting'].packname, 'Via Saweria.co', 'saweria', 'Sudah Donasi', 'donasidone', m)
            if (isGroup) {
              await conn.sendMessage(m.key.remoteJid, 'Silahkan Cek Pesan Pribadi Anda, Dari Nomor Bot!', extendedText, { quoted: m })
            }
          }
     if (conn.isButton === 'dana') {
            await conn.send2Button(m.sender, 'Terimakasih Sudah Mau Donasi\nSilahkan Transfer Ke Nomor DANA di Bawah\n\n*NO :* 0812-6132-4817\n*A/N :* ARIFI RAZZAQ', global.userbot['setting'].packname, 'Via Saweria.co', 'saweria', 'Sudah Donasi', 'donasidone', m)
            if (isGroup) {
              await conn.sendMessage(m.key.remoteJid, 'Silahkan Cek Pesan Pribadi Anda, Dari Nomor Bot!', extendedText, { quoted: m })
            }
          }
     if (conn.isButton === 'rekening') {
            await conn.send2Button(m.sender, 'Terimakasih Sudah Mau Donasi\nSilahkan Transfer Ke Nomor REKENING di Bawah\n\n*BRI Rekening :* 5320-01-018862-53-6\n*A/N :* ARIFI RAZZAQ', global.userbot['setting'].packname, 'Via Saweria.co', 'saweria', 'Sudah Donasi', 'donasidone', m)
            if (isGroup) {
              await conn.sendMessage(m.key.remoteJid, 'Silahkan Cek Pesan Pribadi Anda, Dari Nomor Bot!', extendedText, { quoted: m })
            }
          }
     if (conn.isButton === 'saweria') {
            await conn.sendButton(m.sender, global['getText'].donasi(), global.userbot['setting'].packname, 'Sudah Donasi', 'donasidone', m)
            if (isGroup) {
              await conn.sendMessage(m.key.remoteJid, 'Silahkan Cek Pesan Pribadi Anda, Dari Nomor Bot!', extendedText, { quoted: m })
            }
          }
     if (conn.isButton === 'donasidone') {
            await conn.sendButton(m.key.remoteJid, `Jika Sudah Transfer, Kirim Bukti Transfer Ke nomor Owner Bot, Agar Nama Anda Masuk Kedalam Database Donasi Kami 😊.`, global.userbot['setting'].packname, 'Hubungi Owner Sekarang!', 'founder', m)
          }
     if (conn.isButton === 'nextpay') {
            let teks = "*Keunggulan Donasi Bot* :\n\n• Memperpanjang Aktif Bot\n• Kebutuhan System\n• Perbaikan Pada System bot\n• Menambah Fitur Pada Bot\n• Pahala Jariyah Unyuk Fitur Islami\n• Lainnya.\n\n"
            await conn.send3ButtonLoc(m.key.remoteJid, conn.buff, teks, global.userbot['setting'].packname, 'DANA', 'dana', 'REKENING', 'rekening', 'Pembayaran Sebelumya', 'backpay', m)
          }
     if (conn.isButton === 'nextpayinfaq') {
            let teks = "*Keunggulan Donasi Infaq* :\n\n• Pembangunan\n• Biaya Pendidikan Yatim\n• Dhu'afa Operasional Dakwah Bakti Sosial\n• Pahala Jariyah\n• Lainnya.\n\n"
            await conn.send3ButtonLoc(m.key.remoteJid, conn.buff, teks, global.userbot['setting'].packname, 'DANA', 'dana', 'REKENING', 'rekening', 'Pembayaran Sebelumya', 'backpayinfaq', m)
          }
     if (conn.isButton === 'backpay') {
            let teks = "*Keunggulan Donasi Bot* :\n\n• Memperpanjang Aktif Bot\n• Kebutuhan System\n• Perbaikan Pada System bot\n• Menambah Fitur Pada Bot\n• Pahala Jariyah Unyuk Fitur Islami\n• Lainnya.\n\n"
            await conn.send3ButtonLoc(m.key.remoteJid, conn.buff, teks, global.userbot['setting'].packname, 'OVO', 'ovo', 'GOPAY', 'gopay', 'Pembayaran Lainnya', 'nextpay', m)
          }
     if (conn.isButton === 'backpayinfaq') {
            let teks = "*Keunggulan Donasi Infaq* :\n\n• Pembangunan\n• Biaya Pendidikan Yatim\n• Dhu'afa Operasional Dakwah Bakti Sosial\n• Pahala Jariyah\n• Lainnya.\n\n"
            await conn.send3ButtonLoc(m.key.remoteJid, conn.buff, teks, global.userbot['setting'].packname, 'OVO', 'ovo', 'GOPAY', 'gopay', 'Pembayaran Lainnya', 'nextpay', m)
          }
     if (conn.isButton === 'status') {
            let teks = `*_B o t  S t a t u s_*\n`
                teks += `Speed : ${conn.latensi.toFixed(4)} ms\n`
                teks += `Host : ${global.Ft['os'].hostname()}\n`
                teks += `Group Chats : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).length}\n`
                teks += `Private Chats : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).length}\n`
                teks += `Ram : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(global.Ft['os'].totalmem / 1024 / 1024)}MB\n`
                teks += `Device : ${global.Ft['os'].platform()}\n`
                teks += `Battery : ${conn.battery != undefined ? `${conn.battery.value}%` : '♻️ Mengambil data'}\n`
                teks += `Charge : ${conn.battery != undefined ? `${conn.battery.live ? '🔌 Mengisi Daya' : '⚡ Pengisian Daya Terputus' }` : '♻️ Mengambil data'}\n`
                teks += `Runtime : ${global.Ft['count'](process.uptime())}\n\n`
            await conn.send2ButtonLoc(m.key.remoteJid, conn.buff, teks, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
          }
     if (conn.isListMessage === 'donasibot') {
            let teks = "*Keunggulan Donasi Bot* :\n\n• Memperpanjang Aktif Bot\n• Kebutuhan System\n• Perbaikan Pada System bot\n• Menambah Fitur Pada Bot\n• Pahala Jariyah Unyuk Fitur Islami\n• Lainnya.\n\n"
            await conn.send3ButtonLoc(m.key.remoteJid, conn.buff, teks, global.userbot['setting'].packname, 'OVO', 'ovo', 'GOPAY', 'gopay', 'Pembayaran Lainnya', 'nextpay', m)
          }
     if (conn.isListMessage === 'donasiinfaq') {
            let teks = "*Keunggulan Donasi Infaq* :\n\n• Pembangunan\n• Biaya Pendidikan Yatim\n• Dhu'afa Operasional Dakwah Bakti Sosial\n• Pahala Jariyah\n• Lainnya.\n\n"
            await conn.send3ButtonLoc(m.key.remoteJid, conn.buff, teks, global.userbot['setting'].packname, 'OVO', 'ovo', 'GOPAY', 'gopay', 'Pembayaran Lainnya', 'nextpayinfaq', m)
          }
     if (conn.isListMessage === 'menu') {   
                let teks = `› *${global.userbot['setting'].botname}*\n\n`
                teks += `™🪶 Creator : *@${global['userbot'].owner[0] + '@s.whatsapp.net'.split("@")[0]}*\n`
                teks += `™🛍️ Visitors : *${global['pengunjung'].length} User*\n`
                teks += `™☕ Name User : *@${sender.split('@')[0]}*\n`
                teks += `™⌚ Now : *${global.Ft['ucapan']()}*\n\n`
            await conn.send2ButtonLoc(m.key.remoteJid, conn.buff, teks + global['getText'].menu(conn.prefix, conn.l), global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m, { contextInfo: { mentionedJid : [ sender, global['userbot'].owner[0] + '@s.whatsapp.net' ] }})
          }
     switch (conn.command) {
         case conn.prefix + "credits": {
            await conn.reply(m.key.remoteJid, `credits: - ${global.userbot['setting'].author}`, m)
          }
   break;
         case conn.prefix + "bc": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
          if (!conn.q) return await conn.reply(from, `Reply image , video , atau teks biasa dan Masukan Info`, m);
        if (conn.isMedia && !m.message.imageMessage || conn.isQuotedImage) {
            let encmedia = conn.isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
          let media = await conn.downloadMediaMessage(encmedia)
        }
          let more = String.fromCharCode(8206)
        let bcc = conn.chats.all() 
      let readMore = more.repeat(4001)
    let randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
      await conn.reply(from, `Sedang mengirim pesan ${bcc.length}\nestimasi selesai *${bcc.length * 1.5} detik*`)
         for (let _ of bcc) {
               let delay = time => new Promise(res => setTimeout(res, time))
                 await delay(1500)
                 await conn.sendMessage(_.jid, `${conn.q}`, text)
              }
            await conn.reply(from, `Succses BroadCast ${conn.totalchat.length} Total chat`, m)
          }
   break;
         case conn.prefix + "bcfyt": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
          if (!conn.q) return await conn.reply(from, `Reply image , video , atau teks biasa dan Masukan Info`, m);
        if (conn.isMedia && !m.message.imageMessage || conn.isQuotedImage) {
            let encmedia = conn.isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
          let media = await conn.downloadMediaMessage(encmedia)
        }
          let more = String.fromCharCode(8206)
        let bcc = conn.chats.all() 
      let readMore = more.repeat(4001)
    let randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
      await conn.reply(from, `Sedang mengirim pesan ${bcc.length}\nestimasi selesai *${bcc.length * 1.5} detik*`)
         for (let _ of bcc) {
               let delay = time => new Promise(res => setTimeout(res, time))
                 await delay(1500)
                 await conn.sendMessage(_.jid, `${conn.q}`, text, { detectLink: true, sendEphemeral: true, contextInfo: { externalAdReply: { title: global.userbot['setting'].botname, body: global.userbot['setting'].packname, thumbnail: conn.buff, mediaType: 2, previewType: "VIDEO", mediaUrl: `https:/\/\youtu.be/dTWspvEtwUk` }}})
              }
            await conn.reply(from, `Succses BroadCast ${conn.totalchat.length} Total chat`, m)
          }
   break;
         case conn.prefix + "owner": {
              for (let i of conn.ownerArray.map(v => v + '@s.whatsapp.net')) {
                let vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
              conn.conarray.push({ "displayName": global.userbot['setting'].author, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` })
            }
            await conn.sendMessage(m.chat, { "displayName": `${conn.conarray.length} kontak`, "contacts": conn.conarray }, "contactsArrayMessage", { quoted: m })
            await conn.sendMessage(m.chat, 'Silahkan Tinggalkan Pesan Anda Pada Owner Kami!', extendedText, { quoted: m })
          }
   break;
         case conn.prefix + "spam": {
            if (!conn.isOwner) return await conn.reply(from, msgChat.KhususOwner, msg)
            if (!conn.q) return await conn.reply(from, `Penggunaan ${conn.prefix}spam teks|jumlahspam`, m)
               let argz = conn.q.split("|")
                  if (!argz) return conn.reply(from, `Penggunaan ${conn.prefix}spam teks|jumlah`, m)
			        if (isNaN(argz[1])) return await conn.reply(from, msgChat.NaN, m)
			      for (let i = 0; i < argz[1]; i++){
               await conn.sendMessage(from, argz[0], extendedText)
             }
          }
   break;
         case conn.prefix + "eval": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
         console.log('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mEVAL\x1b[1;37m]' + budy.slice(1))
      try {
           let evaled = await eval(chats.slice(5))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                await conn.sendMessage(m.key.remoteJid, `${evaled}`, extendedText, { quoted: m })
                 } catch (err) {
                await conn.sendMessage(m.key.remoteJid, `${err}`, extendedText, { quoted: m })
              }
          }
   break;
         case conn.prefix + "exec": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
                console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mEXEC\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(global['Ft'].moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss')), global.Ft['chalk'].bold.white('no:'), global.Ft['chalk'].bold.rgb(230, 113, 181)(sender.split("@")[0]), global.Ft['chalk'].bold.white('from:'), global.Ft['chalk'].bold.rgb(0, 170, 255)(pushname), global.Ft['chalk'].bold.white('in:'), global['Ft'].color('Perintah Dari Owner'), global.Ft['chalk'].bold.white('args:'), global.Ft['chalk'].bold.white('[' + global['Ft'].color(conn.args.length) + global.Ft['chalk'].bold.white(']')));
                global['Ft'].exec(chats.slice(5), (err, stdout) => {
                if (err) return conn.reply(from, stdout, m) 
                if (stdout) conn.reply(from, stdout, m)
             })
          }
   break;
         case conn.prefix + "donasi": {     
                let listMsg = {
                title: `${global.userbot['setting'].botname}`, 
                buttonText: 'CLICK HERE',
                footerText: global.userbot['setting'].packname,
                description: `👋🏻 Halo @${sender.split('@')[0]} Mau Donasi Ke mana?`,
                sections: [
                {
                "title": `DONASI INFAQ`,
                "rows" : [
                {
                "title": "PONDOK PESANTREN ~ TAHFIZHUL QUR'AN",
                "description": "\nInfaq Pembangunan Biaya Pendidikan Yatim & Dhu'afa Operasional Dakwah Bakti Sosial.",
                "rowId": "donasiinfaq"
                }]
                },{
                "title": `DONASI BOT`,
                "rows" : [
                {
                "title": "STREAM BOT ~ ARIFI RAZZAQ OFFICIAL",
                "description": "\nAgar Bot Selalu Aktif, Untuk Kebutuhan Operasional Systems Pada Bot Whatsapp.", 
                "rowId": "donasibot"
                }]
                }
                ],
                listType: 1
            }
            await conn.sendMessage(m.key.remoteJid, listMsg, global.mediaType['listMessage'], { contextInfo: { mentionedJid: [sender] }, quoted: m })
          }
   break;
         case conn.prefix + "menu": {     
                let teks = `› *${global.userbot['setting'].botname}*\n\n`
                teks += `™🪶 Creator : *@${global['userbot'].owner[0] + '@s.whatsapp.net'.split("@")[0]}*\n`
                teks += `™🛍️ Visitors : *${global['pengunjung'].length} User*\n`
                teks += `™☕ Name User : *@${sender.split('@')[0]}*\n`
                teks += `™⌚ Now : *${global.Ft['ucapan']()}*\n\n`
                teks += `*_B o t  S t a t u s_*\n`
                teks += `Speed : ${conn.latensi.toFixed(4)} ms\n`
                teks += `Host : ${global.Ft['os'].hostname()}\n`
                teks += `Total Feature : ${conn.command.length}\n`
                teks += `Group Chats : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).length}\n`
                teks += `Private Chats : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).length}\n`
                teks += `Ram : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(global.Ft['os'].totalmem / 1024 / 1024)}MB\n`
                teks += `Device : ${global.Ft['os'].platform()}\n`
                teks += `Battery : ${conn.battery != undefined ? `${conn.battery.value}%` : '♻️ Mengambil data'}\n`
                teks += `Charge : ${conn.battery != undefined ? `${conn.battery.live ? '🔌 Mengisi Daya' : '⚡ Pengisian Daya Terputus' }` : '♻️ Mengambil data'}\n`
                teks += `Runtime : ${global.Ft['count'](process.uptime())}\n\n`
                teks += `*_S t a t u s  O t h e r_*\n`
                teks += `Islam Calender : ${dateIslamic}\n`
                teks += `calender : ${week} ${weton} ${date}\n\n`
            await conn.send3ButtonLoc(m.key.remoteJid, conn.buff, teks, global.userbot['setting'].packname, 'STATUS', 'status', 'CHANGELOG INFORMATION', 'changelog', 'ALL MENU SCRAPE BOT', 'menu', m, { contextInfo: { mentionedJid : [ sender, global['userbot'].owner[0] + '@s.whatsapp.net' ] }})
          }
   break;
         case conn.prefix + "status": {            
            await conn.send2ButtonLoc(m.key.remoteJid, conn.buff, `*_B o t  S t a t u s_*\n` + `Speed : ${conn.latensi.toFixed(4)} ms\n` + `Host : ${global.Ft['os'].hostname()}\n` + `Total Feature : ${conn.command.length}\n` + `Group Chats : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).length}\n` + `Private Chats : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).length}\n` + `Ram : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(global.Ft['os'].totalmem / 1024 / 1024)}MB\n` + `Device : ${global.Ft['os'].platform()}\n` + `Battery : ${conn.battery != undefined ? `${conn.battery.value}%` : '♻️ Mengambil data'}\n` + `Charge : ${conn.battery != undefined ? `${conn.battery.live ? '🔌 Mengisi Daya' : '⚡ Pengisian Daya Terputus' }` : '♻️ Mengambil data'}\n` + `Runtime : ${global.Ft['count'](process.uptime())}\n\n`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
          }
   break;
         case conn.prefix + "rules": {            
            await conn.send2ButtonLoc(m.key.remoteJid, conn.buff, global['getText'].rules(conn.l), global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
          }
   break;
         case conn.prefix + "calenderhijriyah": {
            await conn.send2ButtonLoc(m.key.remoteJid, global.Ft['fs'].readFileSync("./Connect/Userdata/Image/kalenderhijriyah2022.jpeg"), `Sekarang\n • ${dateIslamic}`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
          }
   break;
         case conn.prefix + "calendermasehi": {
            await conn.send2ButtonLoc(m.key.remoteJid, global.Ft['fs'].readFileSync("./Connect/Userdata/Image/kalendermasehi2022.jpeg"), `Sekarang\n • ${week} ${weton} ${date}`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
          }
   break;
         case conn.prefix + "speed": {
            await conn.send2ButtonLoc(m.key.remoteJid, global.Ft['fs'].readFileSync("./Connect/Userdata/Image/speed.jpeg"), `*Kecepatan ${global.userbot['setting'].botname}*\n • ${conn.latensi.toFixed(4)} ms`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
          }
   break;
         case conn.prefix + "runtime": {
            await conn.send2ButtonLoc(m.key.remoteJid, global.Ft['fs'].readFileSync("./Connect/Userdata/Image/runtime.jpeg"), `*Waktu Berjalan ${global.userbot['setting'].botname}*\n • ${global.Ft['count'](process.uptime())}`, global.userbot['setting'].packname, 'CREATOR', 'founder', 'DONASI', 'donasi', m)
          }
   break;
         case conn.prefix + "clearchat": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
                await conn.setMaxListeners(25)
            await conn.modifyChat(m.key.remoteJid, 'clear', { includeStarred: false })
            await conn.reply(m.key.remoteJid, `Total Chat Yang di Bersihkan: 1`, m)
          }
   break;
         case conn.prefix + "deletechat": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
                await conn.setMaxListeners(25)
            await conn.modifyChat(m.key.remoteJid, 'delete', { includeStarred: false })
            await conn.reply(m.key.remoteJid, `Total Chat Yang di Bersihkan: 1`, m)
          }
   break;
         case conn.prefix + "archivechat": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
                await conn.setMaxListeners(25)
            await conn.modifyChat(m.key.remoteJid, 'archive', { includeStarred: false })
            await conn.reply(m.key.remoteJid, `Total Chat Yang di Bersihkan: 1`, m)
          }
   break;
         case conn.prefix + "unarchivechat": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
                await conn.setMaxListeners(25)
            await conn.modifyChat(m.key.remoteJid, 'unarchive', { includeStarred: false })
            await conn.reply(m.key.remoteJid, `Total Chat Yang di Bersihkan: 1`, m)
          }
   break;
         case conn.prefix + "clearallchat": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
                await conn.setMaxListeners(25)
                for (let _ of conn.totalchat) {
            await conn.modifyChat(_.jid, 'clear', { includeStarred: false })
            }
            await conn.reply(m.key.remoteJid, `Total Chat Yang di Bersihkan: ${conn.totalchat.length}`, m)
          }
   break;
         case conn.prefix + "deleteallchat": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
                await conn.setMaxListeners(25)
                for (let _ of conn.totalchat) {
            await conn.modifyChat(_.jid, 'delete', { includeStarred: false })
            }
            await conn.reply(m.key.remoteJid, `Total Chat Yang di Hapus: ${conn.totalchat.length}`, m)
          }
   break;
         case conn.prefix + "archiveallchat": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
                await conn.setMaxListeners(25)
                for (let _ of conn.totalchat) {
            await conn.modifyChat(_.jid, 'archive', { includeStarred: false })
            }
            await conn.reply(m.key.remoteJid, `Total Chat Yang di Arsip: ${conn.totalchat.length}`, m)
          }
   break;
         case conn.prefix + "unarchiveallchat": {
            if (!conn.isOwner) return await conn.reply(m.key.remoteJid, global.userbot['mess'].KhususOwner, m);
                await conn.setMaxListeners(25)
                for (let _ of conn.totalchat) {
            await conn.modifyChat(_.jid, 'unarchive', { includeStarred: false })
            }
            await conn.reply(m.key.remoteJid, `Total Chat Yang di Unarsip: ${conn.totalchat.length}`, m)
          }
   break;
    }
       if (budy.toLowerCase() === ">") {
              await conn.sendMessage(m.key.remoteJid, `Eval tidak di ketahui`, extendedText, { quoted: m, sendEphemeral: true, contextInfo: { externalAdReply: { title: global.userbot['setting'].botname, body: global.userbot['setting'].packname, thumbnail: conn.buff, mediaType: 2, previewType: "VIDEO", mediaUrl: `${global.userbot['source'].urlLinkYt_replyText}` }}})
           }
       if (budy.toLowerCase() === "=>") {
              await conn.sendMessage(m.key.remoteJid, `Eval async tidak di ketahui`, extendedText, { quoted: m, sendEphemeral: true, contextInfo: { externalAdReply: { title: global.userbot['setting'].botname, body: global.userbot['setting'].packname, thumbnail: conn.buff, mediaType: 2, previewType: "VIDEO", mediaUrl: `${global.userbot['source'].urlLinkYt_replyText}` }}})
           }
       if (budy.toLowerCase() === "$") {
              await conn.sendMessage(m.key.remoteJid, `Exec tidak di ketahui`, extendedText, { quoted: m, sendEphemeral: true, contextInfo: { externalAdReply: { title: global.userbot['setting'].botname, body: global.userbot['setting'].packname, thumbnail: conn.buff, mediaType: 2, previewType: "VIDEO", mediaUrl: `${global.userbot['source'].urlLinkYt_replyText}` }}})
           }
       if (conn.isCmd && isGroup) return console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(global.Ft['moment'](m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss')), global.Ft['color'](chats), global.Ft['chalk'].bold.white('no:'), global.Ft['chalk'].bold.rgb(230, 113, 181)(sender.split("@")[0]), global.Ft['chalk'].bold.white('from:'), global.Ft['chalk'].bold.rgb(0, 170, 255)(pushname), global.Ft['chalk'].bold.white('in:'), global.Ft['color'](conn.groupName), global.Ft['chalk'].bold.white('args:'), global.Ft['chalk'].bold.white('[' + global.Ft['color'](conn.args.length) + global.Ft['chalk'].bold.white(']')))
       if (conn.isCmd && !isGroup) return console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(global.Ft['moment'](m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss')), global.Ft['color'](chats), global.Ft['chalk'].bold.white('no:'), global.Ft['chalk'].bold.rgb(230, 113, 181)(sender.split("@")[0]), global.Ft['chalk'].bold.white('from:'), global.Ft['chalk'].bold.rgb(0, 170, 255)(pushname), global.Ft['chalk'].bold.white('in:'), global.Ft['color']('Private Chat'), global.Ft['chalk'].bold.white('args:'), global.Ft['chalk'].bold.white('[' + global.Ft['color'](conn.args.length) + global.Ft['chalk'].bold.white(']')))
       if (isGroup && conn.isButton) return console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBUTTON\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(conn.isButton), global.Ft['chalk'].bold.rgb(204, 204, 0)("from"), global.Ft['chalk'].bold.rgb(153, 255, 204)(pushname), global.Ft['chalk'].bold.rgb(204, 204, 0)("in"), global.Ft['chalk'].bold.rgb(255, 178, 102)(conn.groupData.subject), global.Ft['chalk'].bold('[' + conn.args.length + ']'))
       if (!isGroup && conn.isButton) return console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBUTTON\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(conn.isButton), global.Ft['chalk'].bold.rgb(204, 204, 0)("from"), global.Ft['chalk'].bold.rgb(153, 255, 204)(pushname), global.Ft['chalk'].bold.rgb(204, 204, 0)("in"), global.Ft['chalk'].bold.rgb(255, 178, 102)("Private Chat"), global.Ft['chalk'].bold('[' + conn.args.length + ']'))
       if (isGroup && conn.isListMessage) return console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mLIST\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(conn.isListMessage), global.Ft['chalk'].bold.rgb(204, 204, 0)("from"), global.Ft['chalk'].bold.rgb(153, 255, 204)(pushname), global.Ft['chalk'].bold.rgb(204, 204, 0)("in"), global.Ft['chalk'].bold.rgb(255, 178, 102)(conn.groupData.subject), global.Ft['chalk'].bold('[' + conn.args.length + ']'))
       if (!isGroup && conn.isListMessage) return console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mLIST\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(conn.isListMessage), global.Ft['chalk'].bold.rgb(204, 204, 0)("from"), global.Ft['chalk'].bold.rgb(153, 255, 204)(pushname), global.Ft['chalk'].bold.rgb(204, 204, 0)("in"), global.Ft['chalk'].bold.rgb(255, 178, 102)("Private Chat"), global.Ft['chalk'].bold('[' + conn.args.length + ']'))
       if (isGroup && !conn.isCmd && conn.command) return console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mPESAN\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(conn.command), global.Ft['chalk'].bold.rgb(204, 204, 0)("from"), global.Ft['chalk'].bold.rgb(153, 255, 204)(pushname), global.Ft['chalk'].bold.rgb(204, 204, 0)("in"), global.Ft['chalk'].bold.rgb(255, 178, 102)(conn.groupData.subject), global.Ft['chalk'].bold('[' + conn.args.length + ']'))
       if (!isGroup && !conn.isCmd && conn.command) return console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mPESAN\x1b[1;37m]'), global.Ft['chalk'].bold.rgb(153, 255, 153)(conn.command), global.Ft['chalk'].bold.rgb(204, 204, 0)("from"), global.Ft['chalk'].bold.rgb(153, 255, 204)(pushname), global.Ft['chalk'].bold.rgb(204, 204, 0)("in"), global.Ft['chalk'].bold.rgb(255, 178, 102)("Private Chat"), global.Ft['chalk'].bold('[' + conn.args.length + ']'))
    } catch (err) {
   console.log(err)
  }
 }
}