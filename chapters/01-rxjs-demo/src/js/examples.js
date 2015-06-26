// Create Observable by implementing handlers on your own
// var source = Rx.Observable.create( function ( observer ) {
//     observer.onNext(42);
//     observer.onCompleted();

//     // Any cleanup logic might go here
//     return function () {
//         console.log('disposed');
//     }
// });

// var subscription = source.subscribe(
//     function (x) { 
//         console.log('onNext: %s', x); 
//     },
//     function (e) { 
//         console.log('onError: %s', e); 
//     },
//     function () { 
//         console.log('onCompleted'); 
//     }
//     );

//#####################################################################################################
//#####################################################################################################
//#####################################################################################################

/*// Creates an observable sequence of 5 integers, starting from 1
var source = Rx.Observable.range(1, 5);

// Prints out each item
var subscription = source.subscribe(
    function ( x ) {
        console.log('onNext: %s', x)
    },
    function ( e ) {
        console.log('onError: %s', e)
    },
    function () {
        console.log('onCompleted')
    }
    );*/

//#####################################################################################################
//#####################################################################################################
//#####################################################################################################

// console.log('Current time: ' + Date.now());

// // Creating Observable using timer
// var source = Rx.Observable.timer(
//     5000, /* 5 seconds */
//     1000 /* 1 second */).timestamp();

// var subscription = source.subscribe(
//     function (x) {
//         console.log(x.value + ': ' + x.timestamp);
//     },
//     function ( e ) {
//         console.log('onError: %s', e)
//     },
//     function () {
//         console.log('onCompleted')
//     }
// );
// setTimeout(function () {
//     subscription.dispose();
// }, 10000);

//#####################################################################################################
//#####################################################################################################
//#####################################################################################################
//
//Cold observables start running upon subscription, i.e., the observable sequence only starts pushing values to the observers when Subscribe is called. Values are also not shared among subscribers. This is different from hot observables such as mouse move events or stock tickers which are already producing values even before a subscription is active. When an observer subscribes to a hot observable sequence, it will get the current value in the stream. The hot observable sequence is shared among all subscribers, and each subscriber is pushed the next value in the sequence. For example, even if no one has subscribed to a particular stock ticker, the ticker will continue to update its value based on market movement. When a subscriber registers interest in this ticker, it will automatically get the latest tick.

// Cold vs. Hot Observables

/*---------------- COLD -----------------------*/

/*var source = Rx.Observable.interval(1000);

var subscription1 = source.subscribe(
    function (x) { console.log('Observer 1: onNext: ' + x); },
    function (e) { console.log('Observer 1: onError: ' + e.message); },
    function () { console.log('Observer 1: onCompleted'); });

var subscription2 = source.subscribe(
    function (x) { console.log('Observer 2: onNext: ' + x); },
    function (e) { console.log('Observer 2: onError: ' + e.message); },
    function () { console.log('Observer 2: onCompleted'); });

setTimeout(function () {
    subscription1.dispose();
    subscription2.dispose();
}, 5000);*/



/*---------------- HOT -----------------------*/

/*console.log('Current time: ' + Date.now());

// Creates a sequence
var source = Rx.Observable.interval(1000);

// Convert the sequence into a hot sequence
var hot = source.publish();

// No value is pushed to 1st subscription at this point
var subscription1 = hot.subscribe(
    function (x) { console.log('Observer 1: onNext: %s', x); },
    function (e) { console.log('Observer 1: onError: %s', e); },
    function () { console.log('Observer 1: onCompleted'); });

var subscription2;

console.log('Current Time after 1st subscription: ' + Date.now());

// Idle for 3 seconds
setTimeout(function () {

    // Hot is connected to source and starts pushing value to subscribers
    hot.connect();

    console.log('Current Time after connect: ' + Date.now());

    // Idle for another 3 seconds
    setTimeout(function () {

        console.log('Current Time after 2nd subscription: ' + Date.now());

        subscription2 = hot.subscribe(
            function (x) { console.log('Observer 2: onNext: %s', x); },
            function (e) { console.log('Observer 2: onError: %s', e); },
            function () { console.log('Observer 2: onCompleted'); });

    }, 3000);
}, 3000);

setTimeout(function () {
    subscription1.dispose();
    subscription2.dispose();
}, 10000);
*/