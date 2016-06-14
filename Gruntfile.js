module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');

  grunt.initConfig({
    ngdocs: {
    	  options: {
    		    dest: 'public/docs',
    	  },
      all: ['public/app/**/*.js']
    }
  });
  
//Load the plugin that provides the "ngdocs" task.
  grunt.loadNpmTasks('grunt-ngdocs');  

  grunt.registerTask('default', ['ngdocs']);

};