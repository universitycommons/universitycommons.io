var searchInput = document.getElementById('search-input');
var searchForm = searchInput.parentElement;
var mainContentArea = document.getElementById('content');

if(searchInput && searchForm && mainContentArea)
{
  // Automatically focus search input
  searchInput.focus();

  // Hide "Search" button
  searchForm.className += ' minimal';

  // Display search results as user types
  addEventListener('keyup', function() {
    onExecuteSearch(searchInput, mainContentArea);
  });
}

// Coordinates the search request and display of results
function onExecuteSearch(searchInput, resultsContainer)
{
  var query = searchInput.value;

  if(query)
  {
    getResults(query, function(results) {

      var resultsList = getResultsList(results);

      // Clear existing results container (if applicable)
      var currResultsList = document.getElementById('results');
      if(currResultsList)
      {
        resultsContainer.removeChild(currResultsList);
      }

      // Display current results
      resultsContainer.appendChild(resultsList);

    });
  }
}

// Executes the search for results
function getResults(query, callback)
{
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function()
  {
    if(xhr.readyState === 4)
    {
      var results;

      try
      {
        results = JSON.parse(this.responseText)
        callback(results);
      }
      catch(e)
      {
        // If we encounter an error while parsing the JSON,
        // silently handle the error
        callback([]);
      }
    }
  }

  xhr.open("GET", "/search?q=" + encodeURIComponent(query));
  xhr.send();
}

// Displays the search results
function getResultsList(results)
{
  // Results Container
  var resultsContainer = elem('div', { class: 'container', id: 'results' });

  // Results Header
  resultsContainer.appendChild(elem('h2', { class: 'hidden', text: 'Results' }));

  if(results.length === 0)
  {
    // "No Results" Message
    resultsContainer.appendChild(elem('p', { class: 'no-results-message', text: 'No results found' }));
    return resultsContainer;
  }

  // Project List
  var projectList = elem('ul', { class: 'project-list' });

  results.forEach(function(project) {

    var projectListItem = elem('li', { class: 'project' });

    // Project Name
    projectListItem.appendChild(elem('a', { class: 'project-name', text: project.name, href: project.projectUrl }));

    // Project Info
    var projectInfo = elem('ul', { class: 'project-info' });
    projectInfo.appendChild(projectInfoElem('project-tags', 'Tags', project.tags.join(', ')));
    projectInfo.appendChild(projectInfoElem('project-author', 'Author', project.author, project.authorUrl));
    projectInfo.appendChild(projectInfoElem('project-platform', 'Platform', project.platform));
    projectInfo.appendChild(projectInfoElem('project-license', 'License', project.license));
    projectInfo.appendChild(projectInfoElem('project-source', 'Source', project.sourceHost, project.sourceUrl));
    projectListItem.appendChild(projectInfo);

    // Project Description
    projectListItem.appendChild(elem('p', { class: 'project-description', text: project.description }));

    projectList.appendChild(projectListItem);

  });

  resultsContainer.appendChild(projectList);
  return resultsContainer;
}

// Creates a project info element
function projectInfoElem(className, title, value, url)
{
  // List Item
  var listItem = elem('li', { class: className });

  // Title
  var infoTitle = elem('span', { class: 'info-title', text: title });
  listItem.appendChild(infoTitle);

  // Value
  var infoValue = url
   ? elem('a', { class: 'info-value', text: value, href: url })
   : elem('span', { class: 'info-value', text: value });

  listItem.appendChild(infoValue);

  return listItem;
}

// Creates a DOM element
function elem(elementName, options)
{
  var element = document.createElement(elementName);

  if(options.class)
  {
    element.className = options.class;
  }

  if(options.id)
  {
    element.id = options.id;
  }

  if(options.text)
  {
    element.textContent = options.text;
  }

  if(options.href)
  {
    element.setAttribute('href', options.href);
  }

  return element;
}
