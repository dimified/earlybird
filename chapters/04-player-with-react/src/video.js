/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

'use strict';

var React = require('react');
var Controls = require('./controls');

var Video = React.createClass({
    render: function () {
        return (
            <video src="assets/bigbuckbunny_480p.ogv"></video>
        );
    }
});
module.exports = Video;