/**
 * Tasks to run when "building".
 */

module.exports = function (grunt) {

	grunt.registerTask('build', [
		'sass:dist',
        'cssmin:dist'
	]);
};
