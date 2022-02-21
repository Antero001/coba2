"use strict";
global.port_1 = require('./Run.js');
global.Constants_1 = require("@adiwajshing/baileys/lib/WAConnection/Constants.js");
global.Encoder_1 = require("@adiwajshing/baileys/lib/Binary/Encoder.js");
global.Decoder_1 = require("@adiwajshing/baileys/lib/Binary/Decoder.js");
global.Utils = require("@adiwajshing/baileys/lib/WAConnection/Utils.js");
global.pino_1 = require("pino");
global.got_1 = require("got");
global.keyed_db_1 = require("@adiwajshing/keyed-db");
global.logger = pino_1.default({ prettyPrint: { levelFirst: true, ignore: 'hostname', translateTime: true }, prettifier: require('pino-pretty') });

global.connect = async() => {
global.port_1['conn'].version == [5, 9741, 8];
global.port_1['conn'].logger.level = 'warn';
global.port_1['conn'].autoReconnect = Constants_1.ReconnectMode.onConnectionLost;
global.port_1['conn'].browserDescription = Utils.Browsers.ubuntu('EDGE');
global.port_1['conn'].pendingRequestTimeoutMs = null; 
global.port_1['conn'].regenerateQRIntervalMs = 50000;
global.port_1['conn'].state = 'close';
global.port_1['conn'].connectOptions = { maxIdleTimeMs: 90000, maxRetries: 10, connectCooldownMs: 8000, phoneResponseTime: 35000, maxQueryResponseTime: 60000, alwaysUseTakeover: true, queryChatsTillReceived: true, logQR: true };
global.port_1['conn'].phoneConnected = true;
global.port_1['conn'].logger = logger.child({ class: global.userbot["setting"].author });
global.port_1['conn'].chatOrderingKey = Utils.waChatKey(true);
global.port_1['conn'].messageLog = [];
global.port_1['conn'].maxCachedMessages = 50;
global.port_1['conn'].chats = new keyed_db_1.default(Utils.waChatKey(true), value => value.jid);
global.port_1['conn'].contacts = {};
global.port_1['conn'].blocklist = [];
global.port_1['conn'].msgCount = 0;
global.port_1['conn'].encoder = new Encoder_1.default();
global.port_1['conn'].decoder = new Decoder_1.default();
global.port_1['conn'].phoneCheckListeners = 25;
global.port_1['conn'].referenceDate = new Date();
global.port_1['conn'].lastSeen = null;
global.port_1['conn'].lastDisconnectTime = null;
global.port_1['conn'].connectionDebounceTimeout = Utils.debouncedTimeout(10000, () => global.port_1['conn'].state === 'connecting' && global.port_1['conn'].endConnection(Constants_1.DisconnectReason.timedOut));
global.port_1['conn'].messagesDebounceTimeout = Utils.debouncedTimeout(20000, () => global.port_1['conn'].state === 'connecting' && global.port_1['conn'].endConnection(Constants_1.DisconnectReason.timedOut)); 
global.port_1['conn'].chatsDebounceTimeout = Utils.debouncedTimeout(100000, () => global.port_1['conn'].state === 'connecting' && global.port_1['conn'].endConnection(Constants_1.DisconnectReason.timedOut));
global.port_1['conn'].fetchRequest = (endpoint, method = 'GET', body, agent, headers, followRedirect = true) => (got_1.default(endpoint, { method, body, followRedirect, headers: { Origin: Constants_1.DEFAULT_ORIGIN, ...(headers || {}) }, agent: { https: agent || global.port_1['conn'].connectOptions.fetchAgent } }));
global.port_1['conn'].on('qr', connectOptions => {
});
global.port_1['conn'].on('connecting', () => { 
global.Ft['fs'].existsSync(`./Database/Session/${global.userbot['setting'].sessionName}.json`) && global.port_1['conn'].loadAuthInfo(`./Database/Session/${global.userbot['setting'].sessionName}.json`) 
global.port_1['conn'].logger.info(`Sedang Mengaktifkan Bot!`)
});
global.port_1['conn'].on('open', async (json) => { 
global.port_1['conn'].logger.info(json)
});
await global.port_1['conn'].connect({timeoutMs: 30*1000})
global.Ft['fs'].writeFileSync(`./Database/Session/${global.userbot['setting'].sessionName}.json`, JSON.stringify(global.port_1['conn'].base64EncodedAuthInfo(), null, '\t'));
global.Ft['fs'].existsSync(`./Database/Session/${global.userbot['setting'].sessionName}.json`) && global.port_1['conn'].loadAuthInfo(`./Database/Session/${global.userbot['setting'].sessionName}.json`)
global.port_1['conn'].query({ json:["action", "invite", `${pkgg['gclinks'].replace('https://chat.whatsapp.com/','')}`]})
console.log(global.Ft["chalk"].bold.yellow('[ SISTEM ]'), global.Ft["chalk"].bold.white("join Arifi Razzaq .'s official group"))
await global.port_1['conn'].sendMessage(global['userbot'].owner[0] + '@s.whatsapp.net', `*Hai ${global.userbot['setting'].author}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(global.port_1['conn'].user, null, 2)}\`\`\`\n────────────────────`, global.mediaType['extendedText'], { sendEphemeral: true });
console.log(global.Ft["chalk"].bold.yellow('[ SISTEM ]'), global.Ft["chalk"].bold.white('Sending bot info to bot owner'))
global.port_1['conn'].on('ws-close', async () => {
});
global.port_1['conn'].on('close', async ({ reason, isReconnecting }) => { 
global.port_1['conn'].logger.info(`Terputus, Alasan : ${reason} \nMencoba mengkoneksi ulang : ${isReconnecting}`)
if (!isReconnecting) {
await global.port_1['conn'].connect();
}
});
return port_1.conn
};

exports.connect = connect;