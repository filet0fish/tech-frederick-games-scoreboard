var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    teams : [
      {
        index: 1,
        name: 'Team1',
        score: 100
      },
      {
        index: 2,
        name: 'Team2',
        score: 200
      }
    ]
});
});

module.exports = router;
