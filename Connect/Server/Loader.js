"use strict";
require('./Run.js')
require('./Loader.js')
require('./WAClient.js')
require('../../Connect/Userdata/constructor.js');
require('../../Connect/Userdata/config.js');
require('../../Message/Whatsapp/Functions/APIs.js');
require('../../main.js');
require('../../Connect/Userdata/Keep.js'); 
require('../../Connect/Userdata/JSON.js'); 
require('../../Message/Command/Client/Chat.js'); 
require('../../package.json');
require('../../Database/Assets/ProxyAgent.json'); 

nocache('./Run.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('./Loader.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('./WAClient.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('../../Connect/Userdata/constructor.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('../../Connect/Userdata/config.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('../../Message/Whatsapp/Functions/APIs.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('../../main.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('../../Connect/Userdata/Keep.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('../../Connect/Userdata/JSON.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('../../Message/Command/Client/Chat.js', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('../../Database/Assets/ProxyAgent.json', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));
nocache('../../package.json', module => console.log(global.Ft['chalk'].green(`Function => '${module}' Telah berubah!`)));

function nocache(module) {
console.log(global.Ft['chalk'].blue(`Function =>`), global.Ft['chalk'].yellow(`${module} updated`))
global.Ft['fs'].watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
})
}

function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}