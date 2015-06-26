var Rx = require('rx');


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
// );

// subscription.dispose();

//#####################################################################################################
// console.log("\n###################################################################################\n");
//#####################################################################################################


// Creates an observable sequence of 5 integers, starting from 1
// var source = Rx.Observable.range(1, 5);

// // Prints out each item
// var subscription = source.subscribe(
//     function ( x ) {
//         console.log('onNext: %s', x)
//     },
//     function ( e ) {
//         console.log('onError: %s', e)
//     },
//     function () {
//         console.log('onCompleted')
//     }
// );


//#####################################################################################################
// Using a timer
//#####################################################################################################

// console.log('Current time: ' + Date.now());

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

//#####################################################################################################
// Cold vs. Hot Observables
//#####################################################################################################

/*---------------- COLD -----------------------*/

// var source = Rx.Observable.interval(1000);

// var subscription1 = source.subscribe(
//     function (x) { console.log('Observer 1: onNext: ' + x); },
//     function (e) { console.log('Observer 1: onError: ' + e.message); },
//     function () { console.log('Observer 1: onCompleted'); });

// var subscription2 = source.subscribe(
//     function (x) { console.log('Observer 2: onNext: ' + x); },
//     function (e) { console.log('Observer 2: onError: ' + e.message); },
//     function () { console.log('Observer 2: onCompleted'); });

// setTimeout(function () {
//     subscription1.dispose();
//     subscription2.dispose();
// }, 5000);
// 


/*---------------- HOT -----------------------*/

// console.log('Current time: ' + Date.now());

// // Creates a sequence
// var source = Rx.Observable.interval(1000);

// // Convert the sequence into a hot sequence
// var hot = source.publish();

// // No value is pushed to 1st subscription at this point
// var subscription1 = hot.subscribe(
//     function (x) { console.log('Observer 1: onNext: %s', x); },
//     function (e) { console.log('Observer 1: onError: %s', e); },
//     function () { console.log('Observer 1: onCompleted'); });

// console.log('Current Time after 1st subscription: ' + Date.now());

// // Idle for 3 seconds
// setTimeout(function () {

//     // Hot is connected to source and starts pushing value to subscribers
//     hot.connect();

//     console.log('Current Time after connect: ' + Date.now());

//     // Idle for another 3 seconds
//     setTimeout(function () {

//         console.log('Current Time after 2nd subscription: ' + Date.now());

//         var subscription2 = hot.subscribe(
//             function (x) { console.log('Observer 2: onNext: %s', x); },
//             function (e) { console.log('Observer 2: onError: %s', e); },
//             function () { console.log('Observer 2: onCompleted'); });

//     }, 3000);

// }, 3000);


//#####################################################################################################
// Bridging to Callbacks
//#####################################################################################################


// var Rx = require('rx'),
//     fs = require('fs');

// // Wrap the exists method
// var exists = Rx.Observable.fromCallback(fs.exists);

// var source = exists('filee.txt');

// // Get the first argument only which is true/false
// var subscription = source.subscribe(
//     function (x) { console.log('Observer 2: onNext: %s', x); },
//     function (e) { console.log('Observer 2: onError: %s', e); },
//     function () { console.log('Observer 2: onCompleted'); }
// );


//#####################################################################################################
// Querying Observable Sequences
//#####################################################################################################

// var source1 = Rx.Observable.interval(5000).take(2);
// var proj = Rx.Observable.range(100, 3);
// var resultSeq = source1.flatMap(proj);

// var subscription = resultSeq.subscribe(
//     function (x) { console.log('onNext: %s', x); },
//     function (e) { console.log('onError: %s', x); },
//     function () { console.log('onCompleted'); }
// );


//#####################################################################################################
// Error Handling in the Reactive Extensions
//#####################################################################################################

// var source1 = Rx.Observable.of(1,2,3);
// var source2 = Rx.Observable.throwError(new Error('woops'));
// var source3 = Rx.Observable.of(4,5,6);

// var source = Rx.Observable.mergeDelayError(source1, source2, source3);

// var subscription = source.subscribe(
//     function ( x ) { console.log('onNext: %s', x) },
//     function ( e ) { console.log('onError: %s', e) },
//     function (  ) { console.log('onCompleted') }

// );

