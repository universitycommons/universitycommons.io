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
    },

    {
      name: 'Caucus',
      projectUrl: 'http://www.caucus.com/',
      category: CATEGORY.LMS,
      platform: PLATFORM.JAVA,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.SELFHOSTED,
      sourceUrl: 'http://www.caucus.com/down_caucus5.shtml',
      description: 'An open-source, web-based eLearning and discussion platform'
    }

];
