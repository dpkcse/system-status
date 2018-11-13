var app = require('express');
var router = app.Router();
const si = require('systeminformation');

//get RAM status
function getRamInfoUtil(){
    return new Promise((resolve,reject)=>{
        si.mem()
        .then((data) => {
            resolve(data);
        }).catch((error)=>{
            reject(error)
        }); 
    });
}

//Get network status
function netWorkStatusUtil(){
    return new Promise((resolve,reject)=>{
        si.networkStats()
        .then((data) => {
            resolve(data);
        }).catch((error)=>{
            reject(error)
        }); 
    });
}
//Get CPU status
function cpuStatusUtil(){
    return new Promise((resolve,reject)=>{
        si.cpuCurrentspeed()
        .then((data) => {
            resolve(data);
        }).catch((error)=>{
            reject(error)
        }); 
    });
}

//Get CPU status
function fsSizeStatusUtil(){
    return new Promise((resolve,reject)=>{
        si.fsSize()
        .then((data) => {
            resolve(data);
        }).catch((error)=>{
            reject(error)
        }); 
    });
}

module.exports = {
    getRamInfoUtil,
    netWorkStatusUtil,
    cpuStatusUtil,
    fsSizeStatusUtil
};