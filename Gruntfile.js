/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

module.exports = function (grunt) {
    grunt.initConfig({
        'http-server': {
            src: {
                root: '',
                port: 9000,
                host: '0.0.0.0',
                showDir: true,
                runInBackground: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('serve', ['http-server']);
    grunt.registerTask('default', 'serve');
};