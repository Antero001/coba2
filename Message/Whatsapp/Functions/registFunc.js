const fs = require("fs");
const crypto = require("crypto");

         // Create Crypto
         const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

         // Registered
         const getRegisteredRandomId = () => {
    return _registered[Math.floor(Math.random() * _registered.length)].id
}

         // Create JSON Verify
         const _registered = JSON.parse(fs.readFileSync('./Database/Reguler_bot/registered.json'));
         const addRegisteredUser = (userid, sender, age, time, serials) => {
    let obj = { id: userid, name: sender, age: age, time: time, serial: serials }
    _registered.push(obj)
    fs.writeFileSync('./Database/Reguler_bot/registered.json', JSON.stringify(_registered))
}
        
         // Verifiy Checker
         const checkRegisteredUser = (sender) => {
    let status = false
    Object.keys(_registered).forEach((i) => {
    if (_registered[i].id === sender) {
    status = true
    }
    })
    return status
    }
   
exports.createSerial = createSerial;
exports.getRegisteredRandomId = getRegisteredRandomId;
exports.addRegisteredUser = addRegisteredUser;
exports.checkRegisteredUser = checkRegisteredUser;
exports._registered = _registered;