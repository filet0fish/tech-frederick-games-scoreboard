var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:index', function(req, res, next) {
  res.render('teams', {team:{
    name: 'Team1',
    score: 100,
    index: req.param('index')
},
    games: [
        {name: 'Crazy Catapult Cornhole', score:5},
        {name: 'Drop It Like Its Hot', score: 5},
        {name: 'Meltdown', score: 5},
        {name: 'Monster Jenga', score: 5},
        {name: 'Monster Scrabble', score: 5},
        {name: 'Rapid Fire', score: 5},
        {name: 'Soccer Darts', score: 5},
        {name: 'Splash! Volleyball', score: 5},
        {name: 'Tech Trike-athlon', score: 5},
        {name: 'Xtreme Laser Tag', score: 5}
    ]
})
});

module.exports = router;
