/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

'use strict';

var React = require('react');

var Playback = React.createClass({displayName: "Playback",
    render: function () {
        var classString = 'playback ' + this.props.playback;
        return (
            React.createElement("button", {className: classString, 
                    autoFocus: true})
        );
    }
});

var Controls = React.createClass({displayName: "Controls",
    render: function () {
        return (
            React.createElement(Playback, {playback: this.props.playback})
        );
    }
});
module.exports = Controls;
