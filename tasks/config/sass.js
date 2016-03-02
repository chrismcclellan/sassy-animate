/**
 * Compiles SASS files into CSS.
 * For usage docs see: https://github.com/gruntjs/grunt-contrib-sass
 */

module.exports = function(grunt) {

	grunt.config.set('sass', {

        options: {
            style: 'expanded',
            sourcemap: 'none'
        },
        dist: {
            files: {
                'dist/animate.css': 'scss/animate.scss'
            }
        }
    });

	grunt.loadNpmTasks('grunt-contrib-sass');
};
