const fs = require("fs");

const getLevelingXp = (userId) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
    })
    if (position !== false) {
        return _level[position].xp
    }
}
const getLevelingLevel = (userId) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
    })
    if (position !== false) {
        return _level[position].level
    }
}
const getLevelingId = (userId) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
    })
    if (position !== false) {
        return _level[position].jid
    }
}
const addLevelingXp = (userId, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
    })
    if (position !== false) {
        _level[position].xp += amount
        fs.writeFileSync('./Database/Reguler_bot/level.json', JSON.stringify(_level))
    }
}
const addLevelingLevel = (userId, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].jid === userId) {
          position = i
        }
    })
    if (position !== false) {
        _level[position].level += amount
        fs.writeFileSync('./Database/Reguler_bot/level.json', JSON.stringify(_level))
    }
}
const addLevelingId = (userId) => {
    const obj = {jid: userId, xp: 1, level: 1}
    _level.push(obj)
    fs.writeFileSync('./Database/Reguler_bot/level.json', JSON.stringify(_level))
}
const xpGain = new Set()
const isGained = (userId) => {
    return !!xpGain.has(userId)
}
const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000)
}
exports.isGained = isGained;
exports.xpGain = xpGain;
exports.addLevelingId = addLevelingId;
exports.addLevelingLevel = addLevelingLevel;
exports.addLevelingXp = addLevelingXp;
exports.getLevelingId = getLevelingId;
exports.getLevelingLevel = getLevelingLevel;
exports.getLevelingXp = getLevelingXp;