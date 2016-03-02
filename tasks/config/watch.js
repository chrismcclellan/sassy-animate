/**
 * Run tasks whenever a watched file is added, changed or deleted.
 * For usage docs see: https://github.com/gruntjs/grunt-contrib-watch
 */

module.exports = function(grunt) {

    grunt.config.set('watch', {

        scss: {
            options: { preserve_path: true },
            files: ['scss/**/*'],
            tasks: ['build']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
