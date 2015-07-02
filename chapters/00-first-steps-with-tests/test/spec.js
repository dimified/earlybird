/*global describe, it */

/* global describe, it: false */

'use strict';

(function (Bird, Duck) {
    describe('Bird', function () {

        // TODO: Create an instance of the Bird class and pass possible options
        var bird = new Bird({
            type: 'Bird',
            pos: 0,
            isFlyable: true
        });

        // TODO: Test whether all properties exist in the object

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

        // TODO: Think of what to test and write your own tests
        // (0) Think of what are you expecting
        // (1) Write the tests (Red tests)
        // (2) Implement the function (Green tests)
        // (3) Improve the implementation (Refactoring )
        // (4) Repeat until you are satisfied

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

    describe('Duck', function () {
        // TODO: Create an instance of the Duck class and pass possible options
        // Remember ducks can not fly even though they are kind of a bird
        // (Inheritance)

        var duck = new Duck({
            type: 'Duck',
            pos: 110,
            isFlyable: false
        });

        it('should be some kind of bird', function () {
            expect(duck instanceof Bird).toBeTruthy();
        });

        // TODO: Think of what to test and write your own tests
        // (0) Think of what are you expecting
        // (1) Write the tests (Red tests)
        // (2) Implement the function (Green tests)
        // (3) Improve the implementation (Refactoring )
        // (4) Repeat until you are satisfied

        it('should quack when it wants to say something', function () {
            spyOn(console, 'log');
            duck.say();
            expect(console.log).toHaveBeenCalledWith('quack');
        });

        it('should typically not be able to fly', function () {
            expect(function () { duck.fly(5, 20) }).toThrow('This bird can not fly');
        });

        it('should walk from the lake to the bench', function () {
            duck.move(-110);
            expect(duck.getPosition()).toEqual(0);
        });

    });
})(Bird, Duck);
