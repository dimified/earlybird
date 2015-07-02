/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

/* global describe, it: false */

'use strict';

var React = require('react');
var ReactAddons = require('react/addons');
var Player = require('../../src/player');

var TestUtils = React.addons.TestUtils;

describe('Player', function () {
    var player = TestUtils.renderIntoDocument(
        <Player />
    );

    var playback = TestUtils.findRenderedDOMComponentWithClass(
        player, 'playback'
    );

    it('should be in pause state initially', function () {
        expect(player.state.playback).toEqual('play');
        expect(player.refs.video.getDOMNode().paused).toBeTruthy();
    });

    it('should be in play state after click on play', function () {
        TestUtils.Simulate.click(playback);

        expect(player.state.playback).toEqual('pause');
        expect(player.refs.video.getDOMNode().paused).toBeFalsy();
    });

    it('should be in pause state after click on pause', function () {
        TestUtils.Simulate.click(playback);

        expect(player.state.playback).toEqual('play');
        expect(player.refs.video.getDOMNode().paused).toBeTruthy();
    });
});


