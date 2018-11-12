const si = require('systeminformation');

function getRAMInfo(callback){
    var ram = si.mem()
    .then(data => console.log(data))
    .catch(error => console.error(error));
    callback(ram);
}

module.exports = {
    getRAMInfo
};