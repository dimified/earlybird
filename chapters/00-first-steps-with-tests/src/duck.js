/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 01/07/15
 */

/* global Bird: false */

'use strict';

// Typical inheritance and method overloading via prototype

// Subclass Duck
var Duck = function (o) {
    Bird.call(this, o);
};

Duck.prototype = Object.create(Bird.prototype);

// TODO: Implement the say() function
// A bird should say 'quack'
Duck.prototype.say = function () {
    console.log('quack');
    return this;
};

Duck.prototype.constructor = Duck;