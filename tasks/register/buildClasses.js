module.exports = function(grunt) {

    grunt.task.registerTask('buildClasses', 'Builds a scss file based on configs.', function() {

        var _ = require('lodash');
        var fs = require('fs');
        var path = require('path');
        var list = require('../../classes.config.json');

        var done = this.async();
        var options = this.options();
        var data = this.data;
        var base = process.cwd();

        var str = ".animate, .animated { @include animate(); }\n.infinite { @include infinite(); }";

        _.each(list, function(camel, slug) {
            str = str + "\n." + slug + ", ." + camel + " { @include " + slug +"(); }";
        });

        grunt.file.write("./preprocessed/_classes.scss", str);


    });
};
