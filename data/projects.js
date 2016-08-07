var CATEGORY = {
  LMS: 'Learning Management System'
};

var LICENSE = {
  GPL2: 'GPL-2.0'
};

var PLATFORM = {
  PHP: 'PHP'
};

var SOURCEHOST = {
  GITHUB: 'GitHub'
};

module.exports = [

    {
      name: 'ATutor',
      projectUrl: 'http://www.atutor.ca/',
      category: CATEGORY.LMS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/atutor/ATutor',
      description: 'An Open Source Web-based Learning Management System (LMS) used to develop and deliver online courses'
    }

];

/*
New Project Template:
{
  name: 'Project Name',
  projectUrl: '',
  category: CATEGORY.,
  platform: PLATFORM.,
  license: LICENSE.,
  sourceHost: SOURCEHOST.,
  sourceUrl: '',
  description: 'This is a description of the first project'
}
*/
