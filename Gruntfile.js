/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

module.exports = function (grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        'http-server': {
            src: {
                root: '',
                port: 9000,
                host: 'localhost',
                showDir: true,
                runInBackground: false
            }
        },
        browserify: {
            dist: {
                options: {
                    watch: true
                },
                src: 'solutions/02-player/build/{,*/}*.js',
                dest: 'solutions/02-player/bundle.js'
            }
        }
    });

    grunt.registerTask('serve', [
        'browserify',
        'http-server'
    ]);
    grunt.registerTask('default', 'serve');
};