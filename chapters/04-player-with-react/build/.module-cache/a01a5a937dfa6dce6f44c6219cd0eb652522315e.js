/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

'use strict';

var React = require('react');

var Video = require('./video.js');
var Controls = require('./controls.js');

var Player = React.createClass({displayName: "Player",
    getInitialState: function () {
        return {
            playback: 'play'
        };
    },
    handleClick: function () {
        if (this.state.playback === 'play') {
            React.findDOMNode(this.refs.video).play();
            this.setState({playback: 'pause'});
        }
        if (this.state.playback === 'pause') {
            React.findDOMNode(this.refs.video).pause();
            this.setState({playback: 'play'});
        }
    },
    render: function () {
        return (
            React.createElement("div", {className: "canvas"}, 
                React.createElement(Video, {ref: "video"}), 
                React.createElement("div", {onClick: this.handleClick, className: "controls"}, React.createElement(Controls, {playback: this.state.playback}))
            )
        );
    }
});
module.exports = Player;
