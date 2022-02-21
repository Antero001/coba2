"use strict";
const { WAConnection: _WAConnection, MessageType, ReconnectMode } = require("@adiwajshing/baileys");
const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");
const { Functions } = require('../../Connect/Userdata/constructor.js');
global.func = require('../../Message/Whatsapp/Functions/APIs.js');
global.pkgg = require('../../package.json');
global.PA = require('../../Database/Assets/ProxyAgent.json'); 
global.WAConnection = require('../../Message/Whatsapp/Functions/APIs.js').WAConnection(_WAConnection);
global.mediaType = require("@adiwajshing/baileys").MessageType;
global.conn = new WAConnection();
global.Ft = new Functions();
global.getText = require('../../Connect/Userdata/Keep.js');
global.userbot = require('../../Connect/Userdata/config.js').userbot;
global.Events = {};
global.db = new JsonDB(new Config("./Database/Plugins/Database", true, false, '/'));
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '');
global.Ft['Cfonts'].say(pkgg.version, { font: 'tiny', align: 'left', gradient: ['#3456ff', 'white'] }); console.log(global.Ft['figlet'].textSync(pkgg.name, { font: 'Standard', horizontalLayout: 'default', vertivalLayout: 'default', width: 80, whitespaceBreak: true }));
global.Ft['Cfonts'].say(pkgg.description, { colors: ['#8735f2'], font: 'console', align: 'center' });

conn.Public = false;
conn.multi = true;
conn.nopref = false;
conn.offline = false;
conn.ownerArray = [ global['userbot'].owner[0], global['userbot'].owner[1] ]
conn.prefa = global.userbot['setting'].prefix;
conn.nopref = global.userbot['setting'].noprefix;
conn.conarray = [];
conn.tags = {};
conn.blocked = [];
conn.battrey = { value: 0, cas: true ? 'charging' : '' }

exports.conn = conn;