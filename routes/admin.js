var express = require('express');
var router = express.Router();
var staticData = require('../data/static-data');

var data = {teams : [
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
],
  games: [{
          id: 1,
          name: 'Crazy Catapult Cornhole',
          score: 5
      },
      {
          id: 2,
          name: 'Drop It Like Its Hot',
          score: 5
      },
      {
          id: 3,
          name: 'Meltdown',
          score: 5
      },
      {
          id: 4,
          name: 'Monster Jenga',
          score: 5
      },
      {
          id: 5,
          name: 'Monster Scrabble',
          score: 5
      },
      {
          id: 6,
          name: 'Rapid Fire',
          score: 5
      },
      {
          id: 7,
          name: 'Soccer Darts',
          score: 5
      },
      {
          id: 8,
          name: 'Splash! Volleyball',
          score: 5
      },
      {
          id: 9,
          name: 'Tech Trike-athlon',
          score: 5
      },
      {
          id: 10,
          name: 'Xtreme Laser Tag',
          score: 5
      }
  ]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', data);
});
router.get('/edit/:index', function(req, res, next) {

  var editData = {
    team: staticData.teams[req.param('index')],
    games: staticData.games
  }


  res.render('edit', editData);
});
router.get('/create', function(req, res, next) {
  res.render('create', data);
});
router.post('/create/team', function(req, res, next) {
  req.body.teamName;

});
router.post('/edit/:index/score', function(req, res, next) {
  req.body.score
  staticData.scores.push(
    {
        team: req.param('index'),
        game: req.body.games,
        score: req.body.score
    }
  )
  res.send('Score Recorded');
});
module.exports = router;
