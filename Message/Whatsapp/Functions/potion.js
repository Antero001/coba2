const fs = require("fs");

const bayarPotion = (sender, amount) => {
          let position = false
          Object.keys(_heal).forEach((i) => {
          if (_potion[i].id === sender) {
          position = i
          }
          })
          if (position !== false) {
          _potion[position].potion -= amount
          fs.writeFileSync('./Database/Reguler_bot/adventure/potion.json', JSON.stringify(_potion))
          }
          }
const addPotioUser = (sender, amount) => {
          let position = false
          Object.keys(_potion).forEach((i) => {
          if (_potion[i].id === sender) {
          position = i
          }
          })
          if (position !== false) {
          _potion[position].potion -= amount
          fs.writeFileSync('./Database/Reguler_bot/adventure/potion.json', JSON.stringify(_potion))
          }
          }
const potionAdd = (sender) => {
          let position = false
          Object.keys(_potion).forEach((i) => {
          if (_potion[i].id == sender) {
          position = i
          }
          })
          if (position !== false) {
          _potion[position].potion += 1
          fs.writeFileSync('./Database/Reguler_bot/adventure/potion.json', JSON.stringify(_potion))
          }
          }
         
exports.bayarPotion = bayarPotion;
exports.addPotioUser = addPotioUser;
exports.potionAdd = potionAdd;