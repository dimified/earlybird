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
                    watch: true,
                    transform: ['reactify']
                },
                files: {
                    'chapters/04-player-with-react/bundle.js': 'chapters/04-player-with-react/src/**/*.js'
                }
            }
        },
        express: {
            server: {
                options: {
                    port: 9002,
                    hostname: 'localhost',
                    server: 'chapters/02-express-server/server.js'
                }
            }
        }
    });

    grunt.registerTask('serve', [
        'browserify',
        'express',
        'http-server'
    ]);
    grunt.registerTask('default', 'serve');
};