var express = require('express');
var router = express.Router();
const si = require('systeminformation');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// full async / await example (node >= 7.6)
async function cpu() {
  try {
    const data = await si.cpu();
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

module.exports = router;
