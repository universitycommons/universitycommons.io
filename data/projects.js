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
    },

    {
      name: 'Chamilo',
      projectUrl: 'https://chamilo.org/',
      category: CATEGORY.LMS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/chamilo/chamilo-lms',
      description: 'A learning management system focusing on ease of use, re-usability, collaboration and sharing'
    },

    {
      name: 'eFront',
      projectUrl: 'https://www.efrontlearning.com/',
      category: CATEGORY.LMS,
      platform: PLATFORM.PHP,
      license: LICENSE.CPAL1,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/epignosis/efront_open_source',
      description: 'A highly customized eLearning experience to fit your brand and preferences'
    },

    {
      name: 'ELMS LN',
      projectUrl: 'https://www.elmsln.org/',
      category: CATEGORY.LMS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/elmsln/elmsln',
      description: 'An open source educational technology platform for building and sustaining innovation in course technologies'
    },

    {
      name: 'Forma LMS',
      projectUrl: 'http://www.formalms.org/',
      category: CATEGORY.LMS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.SOURCEFORGE,
      sourceUrl: 'https://sourceforge.net/p/forma/code/HEAD/tree/',
      description: 'An open-source, web-based elearning platform (Learning Management System - LMS), used to manage and deliver online training courses'
    },

    {
      name: 'ILIAS',
      projectUrl: 'http://www.ilias.de/',
      category: CATEGORY.LMS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ILIAS-eLearning/ILIAS',
      description: 'A powerful Open Source Learning Management System for developing and realising web-based e-learning.'
    },

    {
      name: 'LAMS',
      projectUrl: 'https://www.lamsfoundation.org/',
      category: CATEGORY.LMS,
      platform: PLATFORM.JAVA,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.SELFHOSTED,
      sourceUrl: 'http://code.lamsfoundation.org/fisheye/browse/lams',
      description: 'A revolutionary new tool for designing, managing and delivering online collaborative learning activities'
    },

    {
      name: 'Moodle',
      projectUrl: 'https://moodle.org/',
      category: CATEGORY.LMS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/moodle/moodle',
      description: 'A learning platform designed to provide educators, administrators and learners with a single robust, secure and integrated system to create personalised learning environments'
    },

    {
      name: 'OLAT',
      projectUrl: 'http://www.olat.org/product',
      category: CATEGORY.LMS,
      platform: PLATFORM.JAVA,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.SELFHOSTED,
      sourceUrl: 'http://hg.olat.org/repos/',
      description: 'An open source learning management system (LMS) which delivers learning services for large academic institutions to help their people accomplish a meaningful teaching and learning experience'
    },

    {
      name: 'Open Elms',
      projectUrl: 'http://www.openelms.org/',
      category: CATEGORY.LMS,
      platform: PLATFORM.ASP,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.SOURCEFORGE,
      sourceUrl: 'http://openelms.cvs.sourceforge.net/viewvc/openelms/openelms/',
      description: 'Open Elms is an open source project designed to create a Learning Management System focussed on the needs of business'
    },

    {
      name: 'Opigno',
      projectUrl: 'https://www.opigno.org/en',
      category: CATEGORY.LMS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.DRUPAL,
      sourceUrl: 'http://cgit.drupalcode.org/opigno_lms/tree/',
      description: 'An Open Source e-learning platform based on Drupal that allows you to manage your online trainings, and efficiently ensure that student, employee and partner skills remain up to date'
    },

    {
      name: 'Sakai',
      projectUrl: 'https://www.sakaiproject.org/',
      category: CATEGORY.LMS,
      platform: PLATFORM.JAVA,
      license: LICENSE.ECL2,
      sourceHost: SOURCEHOST.SELFHOSTED,
      sourceUrl: 'https://source.sakaiproject.org/svn/sakai/',
      description: 'A fully customizable, 100% open source learning management system'
    },

    {
      name: 'eduTrac',
      projectUrl: 'https://www.edutracsis.com/',
      category: CATEGORY.SIS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL3,
      sourceHost: SOURCEHOST.SOURCEFORGE,
      sourceUrl: 'https://sourceforge.net/p/edutrac/code/ci/master/tree/',
      description: 'A free and open source student information system for higher education'
    },

    {
      name: 'Fedena',
      projectUrl: 'http://projectfedena.org/',
      category: CATEGORY.SIS,
      platform: PLATFORM.RUBY,
      license: LICENSE.APACHE2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/projectfedena/fedena',
      description: 'A free and open-source school management software that has more features than a student information system'
    },

    {
      name: 'openSIS',
      projectUrl: 'http://www.opensis.com/',
      category: CATEGORY.SIS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.SOURCEFORGE,
      sourceUrl: 'https://sourceforge.net/p/opensis-ce/code/HEAD/tree/',
      description: 'A commercial grade, secure, scalable and intuitive Student Information System from OS4ED'
    },

    {
      name: 'RosarioSIS',
      projectUrl: 'https://www.rosariosis.org/',
      category: CATEGORY.SIS,
      platform: PLATFORM.PHP,
      license: LICENSE.GPL2,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/francoisjacquet/rosariosis',
      description: 'A free and open-source Student Information System (SIS)'
    },

    {
      name: 'Shopping Sheet',
      projectUrl: 'https://github.com/ucsbfinaid/Shopping-Sheet',
      category: CATEGORY.FINAID,
      platform: PLATFORM.HTML,
      license: LICENSE.BSD3CLAUSE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/ucsbfinaid/Shopping-Sheet',
      description: 'An open-source web template for the Financial Aid Shopping Sheet'
    },

    {
      name: 'Course Cart',
      projectUrl: 'https://github.com/biola/course-cart',
      category: CATEGORY.ONLINECOURSES,
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/biola/course-cart',
      description: 'Online signups and payment for online courses'
    },

    {
      name: 'BBConnect Sync',
      projectUrl: 'https://github.com/biola/bbconnect-sync',
      category: CATEGORY.UTILITY,
      platform: PLATFORM.RUBY,
      license: LICENSE.NONE,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/biola/bbconnect-sync',
      description: 'Syncs contacts from Banner to Blackboard Connect'
    },

    {
      name: 'Digital Signage',
      projectUrl: 'https://github.com/biola/digital_signage',
      category: CATEGORY.DIGITALSIGNAGE,
      platform: PLATFORM.RUBY,
      license: LICENSE.MIT,
      sourceHost: SOURCEHOST.GITHUB,
      sourceUrl: 'https://github.com/biola/digital_signage',
      description: 'This application is used for managing a collection of digital signs'
    }
];

/*

{
  name: '',
  projectUrl: '',
  category: CATEGORY.,
  platform: PLATFORM.,
  license: LICENSE.,
  sourceHost: SOURCEHOST.,
  sourceUrl: '',
  description: ''
},
*/
