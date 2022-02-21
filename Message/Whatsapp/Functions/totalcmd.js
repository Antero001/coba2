const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./Database/Reguler_bot/totalcmd.json'))

/**
 * for add total command
 * @params {direktori} 
 * dah lah
**/
const cmdadd = () => {
	ceemde[0].totalcmd += 1
	fs.writeFileSync('./Database/Reguler_bot/totalcmd.json', JSON.stringify(ceemde))
}

module.exports = {
	cmdadd
}