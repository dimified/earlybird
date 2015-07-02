/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

'use strict';

var React = require('react');

var Playback = React.createClass({
    render: function () {
        var classString = 'playback ' + this.props.playback;
        return (
            <button className={classString}
                    autoFocus></button>
        );
    }
});

var Controls = React.createClass({
    render: function () {
        return (
            <Playback playback={this.props.playback}/>
        );
    }
});
module.exports = Controls;
