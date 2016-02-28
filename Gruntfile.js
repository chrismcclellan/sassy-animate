/**
 * Gruntfile
 */

var includeAll = require('include-all');
var path = require('path');
var _ = require('lodash');

module.exports = function(grunt) {


    function getConfigs(relPath, config) {

        var defaults = {
            dirname: path.resolve(__dirname, relPath),
            filter: /(.+)\.js$/
        };

        return includeAll( _.extend({}, defaults, config || {}) );
    }


    function invokeTasks(tasks) {
        for (var taskName in tasks) {
            if (tasks.hasOwnProperty(taskName)) {
                tasks[taskName](grunt);
            }
        }
    }


    var task_configs = getConfigs('./tasks/config');
    var task_registry = getConfigs('./tasks/register');

    if (!task_registry.default) {
        task_registry.default = function (grunt) { grunt.registerTask('default', []); };
    }

    invokeTasks( task_configs );
    invokeTasks( task_registry );

};
