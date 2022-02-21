"use strict";
module.exports = {
    async batteryAsyncOBB(conn, json) {
     conn.battrey.value = json[2][0][1].value
      conn.battrey.cas = json[2][0][1].live
  if (parseInt(json[2][0][1].value) <= 1) {
      var cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '1') {
         cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '2') {
         cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '3') {
         cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '4') {
         cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '5') {
         cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '6') {
         cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '7') {
         cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '8') {
         cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '9') {
         cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '10') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '11') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '12') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '13') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '14') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '15') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '16') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '17') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '18') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '19') {
         cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '20') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '21') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '22') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '23') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '24') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '25') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '26') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '27') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '28') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '29') {
         cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '30') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '31') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '32') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '33') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '34') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '35') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '36') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '37') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '38') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '39') {
         cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '40') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '41') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '42') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '43') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '44') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '45') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '46') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '46') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '48') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '49') {
         cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '50') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '51') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '52') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '53') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '54') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '55') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '56') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '57') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '58') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '59') {
         cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '60') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '61') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '62') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '63') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '64') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '65') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '66') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '67') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '68') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '69') {
         cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '70') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '71') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '72') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '73') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '74') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '75') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '76') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '77') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '78') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '79') {
         cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
        } else if (parseInt(json[2][0][1].value) == '80') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '81') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '82') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '83') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '84') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '85') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '85') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '87') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '88') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '89') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '90') {
         cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
        } else if (parseInt(json[2][0][1].value) == '91') {
         cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
        } else if (parseInt(json[2][0][1].value) == '92') {
         cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
        } else if (parseInt(json[2][0][1].value) == '93') {
         cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
        } else if (parseInt(json[2][0][1].value) == '94') {
         cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
        } else if (parseInt(json[2][0][1].value) == '95') {
         cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
        } else if (parseInt(json[2][0][1].value) == '96') {
         cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
        } else if (parseInt(json[2][0][1].value) == '97') {
         cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
        } else if (parseInt(json[2][0][1].value) == '98') {
         cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
        } else if (parseInt(json[2][0][1].value) == '99') {
         cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
        } else if (parseInt(json[2][0][1].value) == '100') {
         cc = `${parseInt(json[2][0][1].value)}% [██████████]`
        }
           if (parseInt(json[2][0][1].value) == '50'){
         console.log(global.Ft['chalk'].bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mSYSTEM\x1b[1;37m]'), global.Ft['chalk'].bold.red('Peringatan Sistem! Baterai Kurang Dari ' + parseInt(json[2][0][1].value) + ' %'));
     if (json[2][0][1].live == 'true') charging = true
     if (json[2][0][1].live == 'false') charging = false
   }
  console.log(global.Ft['chalk'].keyword('orange')('Battery: ' + cc), global.Ft['chalk'].keyword('salmon')(', Charge: ' + json[2][0][1].live + ''));
 }
}