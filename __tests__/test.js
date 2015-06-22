/**
 * @author Dimitri Reifschneider [dimitri.reifschneider@maxdome.de]
 * Date: 18/06/15
 */

/* global jest, describe, it: false */

jest.dontMock('../solutions/00-first-steps-with-tests/bird');

describe('Bird', function() {
    var Bird = require('../solutions/00-first-steps-with-tests/bird');

    var bird = new Bird({
        type: 'Bird',
        pos: 0,
        isFlyable: true
    });

    it('should start at the given position', function() {
        expect(bird.pos).toEqual(0);
        expect(bird.getPosition()).toEqual(0);
    });

    it('should start at the given position', function () {
        expect(bird.pos).toEqual(0);
        expect(bird.getPosition()).toEqual(0);
    });

    it('should have the given type', function () {
        expect(bird.type).toEqual('Bird');
        expect(bird.getType()).toEqual('Bird');
    });

    it('should be flyable', function () {
        expect(bird.isFlyable).toBeTruthy();
    });

    it('should tweet when it wants to say something', function () {
        spyOn(console, 'log');
        bird.say();
        expect(console.log).toHaveBeenCalledWith('tweet');
    });

    it('should just make the first step', function () {
        bird.move();
        expect(bird.getPosition()).toEqual(1);
    });

    it('should move from the tree to the bench', function () {
        bird.move(10);
        expect(bird.getPosition()).toEqual(11);
    });

    it('should fly from the bench to the lake', function () {
        expect(function () { bird.fly() }).toThrow('No arguments given');
        bird.fly(10, 100);
        expect(bird.getPosition()).toEqual(110);
    });

    it('should went only up when slope and distance are equal', function () {
        bird.fly(100, 100);
        expect(bird.getPosition()).toEqual(110);
    });
});