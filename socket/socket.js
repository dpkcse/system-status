var moment = require('moment');

module.exports = function (io) {

    var app = require('express');
    var router = app.Router();
    var {
        getRamInfoUtil,
        netWorkStatusUtil,
        cpuStatusUtil,
        fsSizeStatusUtil
    } = require('../utils/update');

    io.on('connection', function (client) {
        console.log('Client connected...');

        client.on('join', function (data) {
            console.log(data);
        });

        client.on('getRamInfo', function (callback) {
            getRamInfoUtil().then((data)=>{
                callback(data);
            }).catch((error)=>{
                callback(error);
            });
        });        
        
        client.on('netWorkStatus', function (callback) {
            netWorkStatusUtil().then((data)=>{
                callback(data);
            }).catch((error)=>{
                callback(error);
            });
        });

        client.on('cpuStatus', function (callback) {
            cpuStatusUtil().then((data)=>{
                callback(data);
            }).catch((error)=>{
                callback(error);
            });
        });

        client.on('fsSizeStatus', function (callback) {
            fsSizeStatusUtil().then((data)=>{
                callback(data);
            }).catch((error)=>{
                callback(error);
            });
        });


    });

    return router;
}
