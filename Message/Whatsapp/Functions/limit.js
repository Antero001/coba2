const fs = require('fs');

const addLimitCancel = (userId, _dir) => {
    let found = false
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === userId) {
            found = x
        }
    })
    if (found !== false) {
        _dir[found].limit += 1
        fs.writeFileSync('./Database/limit-cancel.json', JSON.stringify(_dir, null, 3))
    }
}

const isLimitCancel = (userId, limitCount, _dir) => {
    let found = false
    for (let x of _dir) {
        if (x.id === userId) {
            let limtis = x.limit
            if (limtis >= limitCount) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false) {
        var obj_add = {
            id: userId,
            limit: 0
        }
        _dir.push(obj_add)
        fs.writeFileSync('./Database/limit-cancel.json', JSON.stringify(_dir, null, 3))
    }
}

module.exports = {
    addLimitCancel,
    isLimitCancel
}