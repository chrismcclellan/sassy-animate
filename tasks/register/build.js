/**
 * Tasks to run when "building".
 */

module.exports = function (grunt) {

	grunt.registerTask('build', [
        'buildClasses',
		'sass:dist',
        'cssmin:dist'
	]);
};
