/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 18/06/15
 */

/* global module: false */

// Some helper functions
function toInt (x) {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}

// Superclass Bird
var Bird = function (o) {
    this.type = o.type;
    this.pos = o.pos;
    this.isFlyable = o.isFlyable;
};


Bird.prototype.getPosition = function () {
    return this.pos;
};

Bird.prototype.getType = function () {
    return this.type;
};

// TODO: Implement the say() function
// A bird should say 'tweet'
Bird.prototype.say = function () {
    return this;
};

// TODO: Implement the move() function
// A bird should move a given number of meters.
// What if no value is passed?
Bird.prototype.move = function () {
    return this;
};

// TODO: Implement the fly() function
// Only certain type of birds can fly. What about ducks?
// One simple implementation could be the calculation of
// the moved distance with the use of the Pythagorean theorem where the
// first parameter is the slope (b) and the second the distance (c).
// A combination with the move method is possible.

// Hint: What about missing parameters?
// Hint: What if the parameters are identical?
Bird.prototype.fly = function (b, c) {
    return this;
};

// Typical inheritance and method overloading via prototype

// Subclass Duck
var Duck = function (o) {
    Bird.call(this, o);
};

Duck.prototype = Object.create(Bird.prototype);

// TODO: Implement the say() function
// A bird should say 'quack'
Duck.prototype.say = function () {
    return this;
};

Duck.prototype.constructor = Duck;