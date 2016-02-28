/**
 * Tasks to run when "building".
 */

module.exports = function (grunt) {

	grunt.registerTask('build', [
		'compass:dist',
        'cssmin:dist'
	]);
};
