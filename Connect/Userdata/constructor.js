"use strict";
const qrcode = require('qrcode-terminal');
const googleImage = require('g-i-s');
const moment = require('moment-timezone');
const fs  = require('fs');
const path = require('path');
const yargs  = require('yargs/yargs');
const yts= require( 'yt-search');
const chalk = require('chalk');
const crypto = require('crypto');
const fetch  = require('node-fetch');
const ggs  = require('google-it');
const axios  = require('axios');
const syntaxerror = require('syntax-error');
const request  = require('request');
const util = require('util');
const ffmpeg = require('fluent-ffmpeg');
const speed  = require('performance-now');
const os = require('os');
const Cfonts = require('cfonts');
const figlet = require('figlet');
const baileys = require ('@adiwajshing/baileys');
const toMs = require('ms');
const qs = require('querystring');
const spin = require('spinnies');
const { spawn, exec, execSync } = require('child_process');
const { title } = require('process');

exports.Functions = class Functions {
constructor() {
this.spin = spin;
this.crypto = crypto;
this.figlet = figlet;
this.toMs = toMs;
this.qs = qs;
this.title = title;
this.qrcode = qrcode;
this.spawn = spawn;
this.execSync = execSync;
this.chalk = chalk;
this.syntaxerror = syntaxerror;
this.Cfonts = Cfonts;
this.os = os;
this.path = path;
this.exec = exec;
this.speed = speed;
this.util = util;
this.ffmpeg = ffmpeg;
this.request = request;
this.axios = axios;
this.ggs = ggs;
this.fetch = fetch;
this.yts = yts;
this.yargs = yargs;
this.path = path;
this.fs = fs;
this.moment = moment;
this.googleImage = googleImage;
}

color(text, color) {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}


Res(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = this.util.format(objectString)
if (objectString == undefined) {
parse = this.util.format(objectPromise)
}
return parse
}

count(s) {
  s = Number(s);
  var d = Math.floor(s / (3600 * 24));
  var h = Math.floor(s % (3600 * 24) / 3600);
  var m = Math.floor(s % 3600 / 60);
  var s = Math.floor(s % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " Hari ,":" Hari,") : ""
  var hDisplay = h > 0 ? h + (h == 1 ? " Jam, ":" Jam,") : " 00 Jam "
  var mDisplay = m > 0 ? m + (m == 1 ? " Menit, ":" Menit ") : " 00 Menit "
  var sDisplay = s > 0 ? s + (s == 1 ? "  Detik, ":" Detik ") : ""
  return dDisplay + hDisplay + mDisplay + sDisplay
}

ucapan() {
  var time = moment.tz('Asia/Jakarta').format('HH')
  var res = null
  if (time >= 4) {
    res = "Good Morning 🌅"
  }
  if (time >= 10) {
    res = "Good Afternoon 🌄"
  }
  if (time >= 15) {
    res = "Good Afternoon 🌇"
  }
  if (time >= 18) {
    res = "Good Night 🌃"
  }
  return res
}
    async connect() {
        return null;
    }
    async unexpectedDisconnect(error) {
        if (conn.state === 'open') {
            const willReconnect = (conn.autoReconnect === Constants_1.ReconnectMode.onAllErrors ||
                (conn.autoReconnect === Constants_1.ReconnectMode.onConnectionLost && error !== Constants_1.DisconnectReason.replaced)) &&
                error !== Constants_1.DisconnectReason.invalidSession; // do not reconnect if credentials have been invalidated
            conn.closeInternal(error, willReconnect);
            willReconnect && (conn.connect()
                .catch(err => { }) // prevent unhandled exeception
            );
        }
        else {
            conn.endConnection(error);
        }
    }
    base64EncodedAuthInfo() {
        return {
            clientID: conn.authInfo.clientID,
            serverToken: conn.authInfo.serverToken,
            clientToken: conn.authInfo.clientToken,
            encKey: conn.authInfo.encKey.toString('base64'),
            macKey: conn.authInfo.macKey.toString('base64'),
        };
    }
    canLogin() {
        var _a, _b;
        return !!((_a = conn.authInfo) === null || _a === void 0 ? void 0 : _a.encKey) && !!((_b = conn.authInfo) === null || _b === void 0 ? void 0 : _b.macKey);
    }
    clearAuthInfo() {
        conn.authInfo = null;
        return conn;
    }
    loadAuthInfo(authInfo) {
        if (!authInfo)
            throw new Error('given authInfo is null');
        if (typeof authInfo === 'string') {
            conn.logger.info(`loading authentication credentials from ${authInfo}`);
            const file = fs.readFileSync(authInfo, { encoding: 'utf-8' }); // load a closed session back if it exists
            authInfo = JSON.parse(file);
        }
        if ('clientID' in authInfo) {
            conn.authInfo = {
                clientID: authInfo.clientID,
                serverToken: authInfo.serverToken,
                clientToken: authInfo.clientToken,
                encKey: Buffer.isBuffer(authInfo.encKey) ? authInfo.encKey : Buffer.from(authInfo.encKey, 'base64'),
                macKey: Buffer.isBuffer(authInfo.macKey) ? authInfo.macKey : Buffer.from(authInfo.macKey, 'base64'),
            };
        }
        else {
            const secretBundle = typeof authInfo.WASecretBundle === 'string' ? JSON.parse(authInfo.WASecretBundle) : authInfo.WASecretBundle;
            conn.authInfo = {
                clientID: authInfo.WABrowserId.replace(/\"/g, ''),
                serverToken: authInfo.WAToken2.replace(/\"/g, ''),
                clientToken: authInfo.WAToken1.replace(/\"/g, ''),
                encKey: Buffer.from(secretBundle.encKey, 'base64'),
                macKey: Buffer.from(secretBundle.macKey, 'base64'), // decode from base64
            };
        }
        return conn;
    }
    async waitForMessage(tag, requiresPhoneConnection, timeoutMs) {
        let onRecv;
        let onErr;
        let cancelPhoneChecker;
        if (requiresPhoneConnection) {
            conn.startPhoneCheckInterval();
            cancelPhoneChecker = conn.exitQueryIfResponseNotExpected(tag, err => onErr(err));
        }
        try {
            const result = await Utils.promiseTimeout(timeoutMs, (resolve, reject) => {
                onRecv = resolve;
                onErr = ({ reason, status }) => reject(new Constants_1.BaileysError(reason, { status }));
                conn.on(`TAG:${tag}`, onRecv);
                conn.on('ws-close', onErr); // if the socket closes, you'll never receive the message
            });
            return result;
        }
        finally {
            requiresPhoneConnection && conn.clearPhoneCheckInterval();
            conn.off(`TAG:${tag}`, onRecv);
            conn.off(`ws-close`, onErr);
            cancelPhoneChecker && cancelPhoneChecker();
        }
    }
    async setQuery(nodes, binaryTags = [Constants_1.WAMetric.group, Constants_1.WAFlag.ignore], tag) {
        const json = ['action', { epoch: conn.msgCount.toString(), type: 'set' }, nodes];
        const result = await conn.query({ json, binaryTags, tag, expect200: true, requiresPhoneConnection: true });
        return result;
    }
    async query(q) {
        let { json, binaryTags, tag, timeoutMs, expect200, waitForOpen, longTag, requiresPhoneConnection, startDebouncedTimeout, maxRetries } = q;
        requiresPhoneConnection = requiresPhoneConnection !== false;
        waitForOpen = waitForOpen !== false;
        let triesLeft = maxRetries || 2;
        tag = tag || conn.generateMessageTag(longTag);
        while (triesLeft >= 0) {
            if (waitForOpen)
                await conn.waitForConnection();
            const promise = conn.waitForMessage(tag, requiresPhoneConnection, timeoutMs);
            if (conn.logger.level === 'trace') {
                conn.logger.trace({ fromMe: true }, `${tag},${JSON.stringify(json)}`);
            }
            if (binaryTags)
                tag = await conn.sendBinary(json, binaryTags, tag);
            else
                tag = await conn.sendJSON(json, tag);
            try {
                const response = await promise;
                if (expect200 && response.status && Math.floor(+response.status / 100) !== 2) {
                    const message = http_1.STATUS_CODES[response.status] || 'unknown';
                    throw new Constants_1.BaileysError(`Unexpected status in '${json[0] || 'query'}': ${http_1.STATUS_CODES[response.status]}(${response.status})`, { query: json, message, status: response.status });
                }
                if (startDebouncedTimeout) {
                    conn.connectionDebounceTimeout.start();
                }
                return response;
            }
            catch (error) {
                if (triesLeft === 0) {
                    throw error;
                }
                if (error.status === 599) {
                    conn.unexpectedDisconnect(Constants_1.DisconnectReason.badSession);
                }
                else if ((error.message === 'close' || error.message === 'lost') &&
                    waitForOpen &&
                    conn.state !== 'close' &&
                    (conn.pendingRequestTimeoutMs === null ||
                        conn.pendingRequestTimeoutMs > 0)) {
                }
                else
                    throw error;
                triesLeft -= 1;
                conn.logger.debug(`query failed due to ${error}, retrying...`);
            }
        }
    }
    exitQueryIfResponseNotExpected(tag, cancel) {
        let timeout;
        const listener = ({ connected }) => {
            if (connected) {
                timeout = setTimeout(() => {
                    conn.logger.info({ tag }, `cancelling wait for message as a response is no longer expected from the phone`);
                    cancel({ reason: 'Not expecting a response', status: 422 });
                }, conn.connectOptions.maxQueryResponseTime);
                conn.off('connection-phone-change', listener);
            }
        };
        conn.on('connection-phone-change', listener);
        return () => {
            conn.off('connection-phone-change', listener);
            timeout && clearTimeout(timeout);
        };
    }
    startPhoneCheckInterval() {
        conn.phoneCheckListeners += 1;
        if (!conn.phoneCheckInterval) {
            conn.phoneCheckInterval = setInterval(() => {
                if (!conn.conn)
                    return;
                conn.logger.info('checking phone connection...');
                conn.sendAdminTest();
                if (conn.phoneConnected !== false) {
                    conn.phoneConnected = false;
                    conn.emit('connection-phone-change', { connected: false });
                }
            }, conn.connectOptions.phoneResponseTime);
        }
    }
    clearPhoneCheckInterval() {
        conn.phoneCheckListeners -= 1;
        if (conn.phoneCheckListeners <= 0) {
            conn.phoneCheckInterval && clearInterval(conn.phoneCheckInterval);
            conn.phoneCheckInterval = undefined;
            conn.phoneCheckListeners = 0;
        }
    }
    async sendAdminTest() {
        return conn.sendJSON(['admin', 'test']);
    }
    async sendBinary(json, tags, tag = null, longTag = false) {
        const binary = conn.encoder.write(json); // encode the JSON to the WhatsApp binary format
        let buff = Utils.aesEncrypt(binary, conn.authInfo.encKey); // encrypt it using AES and our encKey
        const sign = Utils.hmacSign(buff, conn.authInfo.macKey); // sign the message using HMAC and our macKey
        tag = tag || conn.generateMessageTag(longTag);
        if (conn.shouldLogMessages)
            conn.messageLog.push({ tag, json: JSON.stringify(json), fromMe: true, binaryTags: tags });
        buff = Buffer.concat([
            Buffer.from(tag + ','),
            Buffer.from(tags),
            sign,
            buff,
        ]);
        await conn.send(buff);
        return tag;
    }
    async sendJSON(json, tag = null, longTag = false) {
        tag = tag || conn.generateMessageTag(longTag);
        if (conn.shouldLogMessages)
            conn.messageLog.push({ tag, json: JSON.stringify(json), fromMe: true });
        await conn.send(`${tag},${JSON.stringify(json)}`);
        return tag;
    }
    async send(m) {
        conn.conn.send(m);
    }
    async waitForConnection() {
        if (conn.state === 'open')
            return;
        let onOpen;
        let onClose;
        if (conn.pendingRequestTimeoutMs !== null && conn.pendingRequestTimeoutMs <= 0) {
            throw new Constants_1.BaileysError(Constants_1.DisconnectReason.close, { status: 428 });
        }
        await (Utils.promiseTimeout(conn.pendingRequestTimeoutMs, (resolve, reject) => {
            onClose = ({ reason }) => {
                if (reason === Constants_1.DisconnectReason.invalidSession || reason === Constants_1.DisconnectReason.intentional) {
                    reject(new Error(reason));
                }
            };
            onOpen = resolve;
            conn.on('close', onClose);
            conn.on('open', onOpen);
        })
            .finally(() => {
            conn.off('open', onOpen);
            conn.off('close', onClose);
        }));
    }
    async logout() {
        conn.authInfo = null;
        if (conn.state === 'open') {
            await new Promise(resolve => conn.conn.send('goodbye,["admin","Conn","disconnect"]', null, resolve));
        }
        conn.user = undefined;
        conn.chats.clear();
        conn.contacts = {};
        conn.close();
    }
    close() {
        conn.closeInternal(Constants_1.DisconnectReason.intentional);
    }
    closeInternal(reason, isReconnecting = false) {
        conn.logger.info(`closed connection, reason ${reason}${isReconnecting ? ', reconnecting in a few seconds...' : ''}`);
        conn.state = 'close';
        conn.phoneConnected = false;
        conn.lastDisconnectReason = reason;
        conn.lastDisconnectTime = new Date();
        conn.endConnection(reason);
        conn.emit('close', { reason, isReconnecting });
    }
    endConnection(reason) {
        var _a, _b, _c, _d, _e;
        (_a = conn.conn) === null || _a === void 0 ? void 0 : _a.removeAllListeners('close');
        (_b = conn.conn) === null || _b === void 0 ? void 0 : _b.removeAllListeners('error');
        (_c = conn.conn) === null || _c === void 0 ? void 0 : _c.removeAllListeners('open');
        (_d = conn.conn) === null || _d === void 0 ? void 0 : _d.removeAllListeners('message');
        conn.initTimeout && clearTimeout(conn.initTimeout);
        conn.connectionDebounceTimeout.cancel();
        conn.messagesDebounceTimeout.cancel();
        conn.chatsDebounceTimeout.cancel();
        conn.keepAliveReq && clearInterval(conn.keepAliveReq);
        conn.phoneCheckListeners = 0;
        conn.clearPhoneCheckInterval();
        conn.emit('ws-close', { reason });
        try {
            (_e = conn.conn) === null || _e === void 0 ? void 0 : _e.close();
        }
        catch (_f) {
        }
        conn.conn = undefined;
        conn.lastSeen = undefined;
        conn.msgCount = 0;
    }
    generateMessageTag(longTag = false) {
        const seconds = Utils.unixTimestampSeconds(conn.referenceDate);
        const tag = `${longTag ? seconds : (seconds % 1000)}.--${conn.msgCount}`;
        conn.msgCount += 1;
        return tag;
    }
nocache(module) {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
 } catch (e) {
reject(e)
}
})
}

async getBuffer(url, options) {
	try {
		options ? options : {}
		let res = await this.axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

async custom(imageUrl, top, bottom) {
 new Promise((resolve, reject) => {
    let topText = top.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
    let bottomText = bottom.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
    this.getBuffer(`https://api.memegen.link/images/custom/${topText}/${bottomText}.png?background=${imageUrl}`)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})
}
 multiRegex(...args) {
  let tmp = "";
  for(let string of args) {
    if(string != args[args.length - 1]) {
      tmp += string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&') + "|";
    } else {
      tmp += string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    }
  }
  return tmp
}


async plugins() {
var pluginFolder = this['path'].join(__dirname, '../commands');
var pluginFilter = filename => /\.js$/.test(filename);
 global.plugins = {}
for (var filename of this['fs'].readdirSync(pluginFolder).filter(pluginFilter)) {
try {
global.plugins[filename] = require(this['path'].join(pluginFolder, filename));
} catch (e) {
conn.logger.error(e);
delete global.plugins[filename];
}
}
console.log(Object.keys(global.plugins));
global.reload = (_event, filename) => {
if (pluginFilter(filename)) {
var dir = this['path'].join(pluginFolder, filename);
if (dir in require.cache) {
delete require.cache[dir];
console.log(`now '${filename}' is update`);
if (this['fs'].existsSync(dir));
else {
conn.logger.warn(`deleted plugin '${filename}'`);
return delete global.plugins[filename];
}
} else conn.logger.info(`MENAMBAH PLUGIN '${filename}'`);
var err = this.syntaxerror(this['fs'].readFileSync(dir), filename);
if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`);
else try {
global.plugins[filename] = require(dir);
} catch (e) {
conn.logger.error(e);
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)));
}
}
} 
Object.freeze(global.reload);
this['fs'].watch(this['path'].join(__dirname, '../commands'), global.reload);
}

parseRegex(string) {
return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}

async action() {
var pluginFolder = this['path'].join(__dirname, '../Server');
var pluginFilter = filename => /\.js$/.test(filename);
global.pluginss = {}
for (var filename of this['fs'].readdirSync(pluginFolder).filter(pluginFilter)) {
try {
global.pluginss[filename] = require(this['path'].join(pluginFolder, filename));
} catch (e) {
conn.logger.error(e);
delete global.pluginss[filename];
}
}
console.log(Object.keys(global.pluginss));
global.reloadd = (_event, filename) => {
if (pluginFilter(filename)) {
var dir = this['path'].join(pluginFolder, filename);
if (dir in require.cache) {
delete require.cache[dir];
console.log(`now '${filename}' is update`);
if (this['fs'].existsSync(dir));
else {
conn.logger.warn(`deleted plugin '${filename}'`);
return delete global.pluginss[filename];
}
} else conn.logger.info(`requiring new plugin '${filename}'`);
var err = this.syntaxerror(this['fs'].readFileSync(dir), filename);
if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`);
else try {
global.pluginss[filename] = require(dir);
} catch (e) {
conn.logger.error(e);
} finally { 
global.pluginss = Object.fromEntries(Object.entries(global.pluginss).sort(([a], [b]) => a.localeCompare(b)));
}
}
} 
Object.freeze(global.reloadd);
this['fs'].watch(this['path'].join(__dirname, '../Server'), global.reloadd);
}




 start(file) {
  let args = [this.path.join(__dirname, file), ...process.argv.slice(2)]
  this.Cfonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = this.spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    console.error('Exited with code:', code)
    if (code === 0) return
    this.fs.watchFile(args[0], () => {
      this.fs.unwatchFile(args[0])
    })
  })
 }
}