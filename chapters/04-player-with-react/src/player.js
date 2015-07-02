/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

'use strict';

var React = require('react');

var Video = require('./video');
var Controls = require('./controls');

var Player = React.createClass({
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
            <div className="player">
                <Video ref="video" />
                <div onClick={this.handleClick} className="controls"><Controls playback={this.state.playback}/></div>
            </div>
        );
    }
});
module.exports = Player;
