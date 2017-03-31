var express = require('express');
var projects = require('../data/projects');
var router = express.Router();
var searchProjects = require('../lib/search-projects');

// Home
router.get('/', function(req, res, next) {

  var searchInput = req.query.q;

  if(searchInput)
  {
    handleSearch(searchInput, function(results) {

      var showResults = true;
      var searchResults = [];

      if(results)
      {
        showResults = true;
        searchResults = results;
      }

      res.render('index', {
        title: 'University Commons',
        showResults: showResults,
        searchResults: searchResults,
        totalProjectCount: projects.length,
        searchInput: searchInput
      });

    });
  }
  else
  {
    res.render('index', {
      title: 'University Commons',
      showResults: false,
      searchResults: [],
      totalProjectCount: projects.length,
      searchInput: null
    });
  }

});

// About
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About > University Commons', totalProjectCount: projects.length });
});

// Search
router.get('/search', function(req, res, next) {
  handleSearch(req.query.q, function(results) { res.json(results); });
});

function handleSearch(query, callback)
{
  if(typeof query != 'undefined')
  {
    searchProjects(decodeURI(query), callback);
  }
  else
  {
    callback();
  }
}

module.exports = router;
