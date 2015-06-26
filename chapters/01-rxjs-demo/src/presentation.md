#Introduction to Reactive Programming

##What is reactive programming?

<b>Reactive programming is programming with asynchronous data streams.</b>
In a way, this isn't anything new. Event buses or your typical click events are really an asynchronous event stream, on which you can observe and do some side effects. Reactive is that idea on steroids. You are able to create data streams of anything, not just from click and hover events. Streams are cheap and ubiquitous, anything can be a stream: variables, user inputs, properties, caches, data structures, etc. For example, imagine your Twitter feed would be a data stream in the same fashion that click events are. You can listen to that stream and react accordingly.

A way of how to think about streams:

stream1 -------x--x--x-----x-----x-x---x-----x----|
stream2 ----x--x-------x---------x-------x-------x|

Mantra: Everything is stream

On top of that, you are given an amazing toolbox of functions to combine, create and filter any of those streams. That's where the "functional" magic kicks in. A stream can be used as an input to another one. Even multiple streams can be used as inputs to another stream. You can merge two streams. You can filter a stream to get another one that has only those events you are interested in. You can map data values from one stream to another new one.

A stream is a sequence of ongoing events ordered in time.
Stream can emit three different things: a value (of some type), an error, or a "completed" signal

The "listening" to the stream is called subscribing.

How to create stream?
As mentioned stream can be anything, so to start of you can create your own stream from scratch, and the basic function for this is "create" Rx.Observable.create(subscribe);

/* Using a function */
var stream = Rx.Observable.create(function (observer) {
    observer.onNext(42);
    observer.onCompleted();

    // Note that this is optional, you do not have to return this if you require no cleanup
    return function () {
        console.log('disposed');
    };
});

var subscription = stream.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

// => Next: 42
// => Completed

You can also create a stream from any element: Rx.Observable.just(value, [scheduler]) 

...from string
var stream = Rx.Observable.just("Just a string");

var subscription = stream.subscribe(
  function (x) {
    console.log('Next: %s', x);
  }
 );
// => Next: Just a string

...from number
var stream = Rx.Observable.just(123);

var subscription = stream.subscribe(
  function (x) {
    console.log('Next: %s', x);
  }
 );
// => Next: 123

var stream = Rx.Observable.just(123);

...from promise
var stream = Rx.Observable.fromPromise(promise)

...from another stream 
var stream1 = Rx.Observable.fromPromise(promise)
var stream2 = stream1.map( x => return x; )
var stream3 = stream2.filter( x => x > 0; )

...from another streams
var merged = Rx.Observable.merge(
    source1,
    source2
    source3);

Mantra: Everything is stream

Observable object also gives you a lot of more functions that you can use to create, transform, filter, combine, and other operations against Observables.
And how to decide which observable operator you are looking for?
http://reactivex.io/documentation/operators.html#creating
Here you can find the list of all observable operators and the questions which can help you in determining which one to use 

Mantra: Everything is stream


http://staltz.com/rxmarbles/