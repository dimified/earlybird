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
var Perf = React.addons.Perf;

describe('Player', function () {
    var renderTime = 20;

    Perf.start();
    var player = TestUtils.renderIntoDocument(
        <Player />
    );
    Perf.printInclusive();
    Perf.stop();

    it('should be rendered within ' + renderTime + ' ms', function () {
        expect(Perf.getLastMeasurements()[1].totalTime).toBeLessThan(renderTime);
    });

    /**
     * Total time expectation for rendering
     */

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



