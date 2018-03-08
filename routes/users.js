var express = require('express');
var router = express.Router();
var request = require('request');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/download', function(req, res) {
  var data = null;
  request('http://localhost:5000/DSSSB_FORM.pdf').pipe(res.status(200));
});
module.exports = router;
