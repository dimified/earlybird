/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

'use strict';

var React = require('react');
var Controls = require('./controls.js');

var Video = React.createClass({displayName: "Video",
    render: function () {
        return (
            React.createElement("video", {src: "assets/bigbuckbunny_480p.ogv"})
        );
    }
});
module.exports = Video;