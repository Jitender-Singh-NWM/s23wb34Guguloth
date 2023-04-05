var express = require('express');
var router = express.Router();
let query = req.query
console.log(`rows ${query.rows}`)
console.log(`cols ${query.cols}`)
/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('index', { title: 'Board Display',query: query });
});

module.exports = router;
