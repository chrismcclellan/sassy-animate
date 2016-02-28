/**
 * Tasks that run during "build" plus WATCH task;
 */

module.exports = function (grunt) {

	grunt.registerTask('default', [
        'build',
        'watch'
    ]);
};
