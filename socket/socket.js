var moment = require('moment');
var {
    getRamInfo
} = require('../utils/update');
module.exports = function (io) {

    var app = require('express');
    var router = app.Router();

    io.on('connection', function (client) {
        console.log('Client connected...');

        client.on('join', function (data) {
            console.log(data);
        });

        client.on('connected', function (userdata) {
            var currentUser = moment(userdata.from).format('X');
            console.log(currentUser);
            client.join(currentUser);
        });

        client.on('getRamInfo', function (userdata,callback) {
            getRamInfo((respons)=>{
                console.log(respons);
            });
        });



    });

    return router;
}
