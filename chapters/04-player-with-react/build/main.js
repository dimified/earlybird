/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 22/06/15
 */

'use strict';

var React = require('react');

var Player = require('./player.js');


/**
 * Render DOM node
 */
React.render(
    React.createElement(Player, null),
    document.body
);