/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 18/06/15
 */

'use strict';

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
    console.log('tweet');
    return this;
};

// TODO: Implement the move() function
// A bird should move a given number of meters.
// What if no value is passed?
Bird.prototype.move = function (m) {
    console.log('Moved to ' + (m ? this.pos = this.pos + m : ++this.pos )+ ' m');
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
    if (arguments.length < 2) {
        throw new Error('No arguments given');
    } else {
        if (this.isFlyable) {
            if (b !== c) {
                this.move(
                    toInt( Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2)) )
                );
            } else {
                console.log('Bird just went up and down again');
                return false;
            }
        } else {
            throw new Error('This bird can not fly');
        }
    }
    return this;
};
