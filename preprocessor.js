/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

var ReactTools = require('react-tools');

module.exports = {
    process: function (src) {
        return ReactTools.transform(src);
    }
};