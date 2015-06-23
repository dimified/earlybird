/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 23/06/15
 */

'use strict';

jest.dontMock('../solutions/02-player/src/controls');


describe('Controls', function () {
    var React = require('react');
    var ReactAddons = require('react/addons');
    var TestUtils = ReactAddons.addons.TestUtils;

    var Canvas = require('../solutions/02-player/src/canvas.js');

    it('should pass something', function () {
        // Render playback button in the document
        var canvas = TestUtils.renderIntoDocument(
            <Canvas />
        );

        console.log(React.findDOMNode(canvas));
    });
});