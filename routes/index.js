var express = require('express');
var router = express.Router();

var mockSearchResults = [

  {
    name: 'Project Name 1',
    category: 'Category Name 1',
    platform: 'Platform Name 1',
    license: 'MIT',
    sourceHost: 'GitHub',
    sourceUrl: 'https://github.com/universitycommons/universitycommons.io',
    description: 'This is a description of the first project'
  },

  {
    name: 'Project Name 2',
    category: 'Category Name 2',
    platform: 'Platform Name 2',
    license: 'ISC',
    sourceHost: 'SourceForge',
    sourceUrl: 'https://github.com/universitycommons/universitycommons.io',
    description: 'This is a description of the second project'
  },

];

// Home
router.get('/', function(req, res, next) {

  var searchResults = {};
  var showResults = false;
  var searchInput = req.query.q;

  if(typeof searchInput != 'undefined')
  {
    showResults = true;
    searchResults = mockSearchResults;
  }

  res.render('index', {
    title: 'University Commons',
    showResults: showResults,
    searchResults: searchResults
  });

});

// About
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About > University Commons' });
});

// Search
router.get('/search', function(req, res, next) {
  res.json(mockSearchResults);
});

module.exports = router;
