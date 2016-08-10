var CATEGORY_ALIAS = require('../data/category-alias');
var projects = require('../data/projects');

function searchProjects(rawQuery, callback)
{
  var results = [];
  var query = rawQuery.toLowerCase();

  projects.forEach(function(project) {

    // Search: Project Name
    var projectName = project.name.toLowerCase();
    if(contains(projectName, query))
    {
      results.push(project);
      return;
    }

    // Search: Project Category
    var projectCategory = project.category.toLowerCase();
    if(contains(projectCategory, query))
    {
      results.push(project);
      return;
    }

    // Search: Project Description
    var projectDesc = project.description.toLowerCase();
    if(contains(projectDesc, query))
    {
      results.push(project);
      return;
    }

    // Search: Project Category Aliases
    var projectCategoryAliases = CATEGORY_ALIAS[project.category];

    if(typeof projectCategoryAliases != 'undefined')
    {
      var matchesAlias = false;
      projectCategoryAliases.forEach(function(alias) {

        if(alias === query)
        {
          matchesAlias = true;
        }

      });

      if(matchesAlias)
      {
        results.push(project);
        return;
      }
    }

  });

  callback(results);
}

function contains(target, value)
{
  return (target.indexOf(value) != -1)
}

module.exports = searchProjects;
