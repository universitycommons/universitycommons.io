var projects = require('../data/projects');

function searchProjects(rawQuery, callback)
{
  var results = [];
  var query = rawQuery.toLowerCase();

  projects.forEach(function(project) {

    // Search: Project Name
    var projectName = project.name.toLowerCase();
    if(projectName.indexOf(query) != -1)
    {
      results.push(project);
    }

  });

  callback(results);
}

module.exports = searchProjects;
