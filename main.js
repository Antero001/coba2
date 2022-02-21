"use strict";
global.handler = require('./Message/Command/Client/Chat.js');
global.calls = require('./Message/Command/Client/Call.js');
global.blockk = require('./Message/Command/Client/Block.js');
global.batteryOS = require('./Message/Command/Client/Battery.js');
global.WAClient = require('./Connect/Server/Run.js');
global.Action = require('./Connect/Server/WAClient.js');
global.liveLog = require('./Message/Whatsapp/Functions/liveLogs.js');

  async function round() {
     await Action.connect(global['Ft'].connect)
           WAClient['conn'].on('chats-received', async ({ hasNewChats }) => {
           WAClient['conn'].logger.info(`You have ${conn.chats.length} chats, new chats available: ${hasNewChats}`);
        
           const unread = await conn.loadAllUnreadMessages ();
           WAClient['conn'].logger.info(`You have ${unread.length} unread messages`);
        });
           WAClient['conn'].on('contacts-received', () => {
           WAClient['conn'].logger.info(`You have ${Object.keys(conn.contacts).length} contacts`);
        });
           WAClient['conn'].on('CB:Call', async (json) => {
           calls.rejectPhone(conn, json);
        });
           WAClient['conn'].on('CB:Blocklist', async (json) => {  
           blockk.listBlockked(conn, json);
        });
           WAClient['conn'].on('CB:action,,battery', async (json) => { 
           batteryOS.batteryAsyncOBB(conn, json);
        });
           WAClient['conn'].on('group-participants-update', async (json) => {
           console.log(json);
        });
           WAClient['conn'].on('chat-update', async (m) => {
           handler.chatUpdate(conn, m);
        });
      }
      require('./Connect/Server/Loader.js');
      liveLog.start('','');
      round();