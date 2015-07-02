/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

/* global describe, it: false */

'use strict';

var React = require('react');
var ReactAddons = require('react/addons');
var Player = require('../build/player.js');

var TestUtils = React.addons.TestUtils;

describe('Player', function () {
    it('should', function () {
        var player = TestUtils.renderIntoDocument(
            <Player />
        );
        console.log('hello world');
        expect(1===1).toBeTruthy();
    });
});


