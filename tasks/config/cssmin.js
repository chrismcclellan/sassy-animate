/**
 * Minifies CSS and puts next to non-minified copy
 * For usage docs see: https://github.com/gruntjs/grunt-contrib-compass
 */

module.exports = function(grunt) {

    grunt.config.set('cssmin', {

        options: {
            shorthandCompacting: true
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'dist',
                src: ['*.css', '!*.min.css'],
                dest: 'dist',
                ext: '.min.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
