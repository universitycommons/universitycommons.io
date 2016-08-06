var express = require('express');
var router = express.Router();

/* GET Home Page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'University Commons' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About > University Commons' });
});

module.exports = router;
