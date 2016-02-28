/**
 * Compiles SASS files into CSS.
 * For usage docs see: https://github.com/gruntjs/grunt-contrib-compass
 */

module.exports = function(grunt) {

	grunt.config.set('compass', {

        options: {
            noLineComments: true,
            outputStyle: 'expanded'
        },
        dist: {
            options: {
                cssDir: './dist',
                sassDir: 'src'
            }
        }
    });

	grunt.loadNpmTasks('grunt-contrib-compass');
};
