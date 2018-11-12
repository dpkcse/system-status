var express = require('express');
var router = express.Router();
const si = require('systeminformation');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  // promises style - new in version 3
  si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));

  si.mem()
  .then(data => console.log(data))
  .catch(error => console.error(error));
  
  si.battery()
  .then(data => console.log(data))
  .catch(error => console.error(error));

  // setInterval(function () {
  //   si.networkStats().then(data => {
  //     console.log(data);
  //   })
  // }, 1000)
  
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
