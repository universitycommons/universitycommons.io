var CATEGORY = require('./category.js');
var LICENSE = require('./license.js');
var PLATFORM = require('./platform.js');
var SOURCEHOST = require('./sourcehost.js');

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
    },

    {
      name: 'Canvas',
      projectUrl: 'https://www.canvaslms.com/',
      category: CATEGORY.LMS,
      platform: PLATFORM.RUBY,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/instructure/canvas-lms',
      description: 'The open LMS by Instructure, Inc.'
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
