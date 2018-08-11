var express = require('express');
var router = express.Router();

var staticData = require('../data/static-data');

/* GET home page. */
router.get('/', function(req, res, next) {

  staticData.teams[0].score += 1;

  res.render('index', {
    teams : staticData.teams
  });
});

module.exports = router;
