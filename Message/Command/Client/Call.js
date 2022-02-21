"use strict";
module.exports = {
    async rejectPhone(conn, json) {
        let number = json[1]['from'];
        let isOffer = json[1]["type"] == "offer";
        if (number && isOffer && json[1]["data"]) {
            var tag = conn.generateMessageTag();
            var NodePayload = ["action", "call", ["call", {
                    "from": conn.user.jid,
                    "to": number.split("@")[0] + "@s.whatsapp.net",
                    "id": tag
                },
                [
                    ["reject", {
                        "call-id": json[1]['id'],
                        "call-creator": number.split("@")[0] + "@s.whatsapp.net",
                        "count": "0"
                    }, null]
                ]
            ]];
            await conn.send(`${tag}, ${JSON.stringify(NodePayload)}`)
            await conn.sendMessage(number, "*• IND*\nMohon Maaf, Tolong Jangan Menelepon Nomor Ini, Jika Anda Menelepon Lagi, Anda Akan Otomatis Di Blokir Oleh System, Dikarenakan Nomor Ini Sudah Di Khusus kan Dengan Penuh Keamanan Bot.\n\n*• ENG*\nSorry, Please Don't Call This Number, If You Call Again, You Will Be Automatically Blocked By The System, Because This Number Has Been Specialized With Full Bot Security.", global.mediaType["extendedText"], { sendEphemeral: true })
            console.log(global.Ft['chalk'].hex('#FF8C00')('call: ' + number.split("@")[0] + '', global.Ft['chalk'].hex('#EC7625')(", succes reject")))
         }
      }
   }