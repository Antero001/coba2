"use strict";
// Mengambil Total
const getPengunjung = () => {
    return global['pengunjung'][Math.floor(Math.random() * global['pengunjung'].length)].id
};

// Create JSON Verify
const addPengunjung = (usr, sender, age, time, serials) => {
    let obj = { id: usr, name: sender, age: age, time: time, serial: serials }
    global['pengunjung'].push(obj)
    global.Ft['fs'].writeFileSync('./Database/pengunjung.json', JSON.stringify(global['pengunjung']))
};
        
// Verifiy Checker
const cekPengunjung = (sender) => {
    let status = false
    Object.keys(global['pengunjung']).forEach((i) => {
    if (global['pengunjung'][i].id === sender) {
    status = true
    }
    })
    return status
};

exports.getPengunjung = getPengunjung;
exports.addPengunjung = addPengunjung;
exports.cekPengunjung = cekPengunjung;