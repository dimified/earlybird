/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 18/06/15
 */

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

Bird.prototype.say = function () {
    console.log('tweet');
    return this;
};

Bird.prototype.getType = function () {
    return this.type;
};

Bird.prototype.getPosition = function () {
    return this.pos;
};

Bird.prototype.move = function (m) {
    console.log('Moved to ' + (m ? this.pos = this.pos + m : ++this.pos )+ ' m');
    return this;
};

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

// Typical inheritance and method overloading via prototype

// Subclass Duck
var Duck = function (o) {
    Bird.call(this, o);
};

Duck.prototype = Object.create(Bird.prototype);

Duck.prototype.say = function () {
    console.log('quack');
    return this;
};

Duck.prototype.constructor = Duck;