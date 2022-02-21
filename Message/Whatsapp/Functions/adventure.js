const fs = require("fs");

const bayarHeal = (sender, amount) => {
           	let position = false
          Object.keys(_heal).forEach((i) => {
          if (_heal[i].id === sender) {
          position = i
          }
          })
          if (position !== false) {
          _heal[position].heal -= amount
          fs.writeFileSync('./Database/Reguler_bot/adventure/heal.json', JSON.stringify(_heal))
          }
          }
const addHealUser = (sender, amount) => {
          let position = false
          Object.keys(_heal).forEach((i) => {
          if (_heal[i].id === sender) {
          position = i
          }
          })
          if (position !== false) {
          _heal[position].heal -= 25
          fs.writeFileSync('./Database/Reguler_bot/adventure/heal.json', JSON.stringify(_heal))
          }
          }
const healAdd = (sender) => {
          let position = false
          Object.keys(_heal).forEach((i) => {
          if (_heal[i].id == sender) {
          position = i
          }
          })
          if (position !== false) {
          _heal[position].heal += 25
          fs.writeFileSync('./Database/Reguler_bot/adventure/heal.json', JSON.stringify(_heal))
          }
          }

exports.bayarHeal = bayarHeal;
exports.addHealUser = addHealUser;
exports.healAdd = healAdd;