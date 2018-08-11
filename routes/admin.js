var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', {
    something : [
      {
        index: 1,
        name: 'Team1',
        score: 200
      },
      {
        index: 2,
        name: 'Team2',
        score: 200
      }
    ]
});
});
router.get('/edit', function(req, res, next) {
  res.render('edit', {
    something : [
      {
        index: 1,
        name: 'Team1',
        score: 200
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
