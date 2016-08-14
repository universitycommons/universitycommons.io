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

    // Search: Project Tags
    var projectTags = project.tags;

    if(typeof projectTags != 'undefined')
    {
      var matchesAlias = false;
      projectTags.forEach(function(tag) {

        if(!matchesAlias && contains(tag, query))
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

    // Search: Project Description
    var projectDesc = project.description.toLowerCase();
    if(contains(projectDesc, query))
    {
      results.push(project);
      return;
    }

  });

  callback(results);
}

function contains(target, value)
{
  return (target.indexOf(value) != -1)
}

module.exports = searchProjects;
