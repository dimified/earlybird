var btn1 = document.getElementById('btn1');
var cancel = document.getElementById('cancel');

var btn1ClickStream = Rx.Observable.fromEvent( btn1, 'click' );

// The 4 lines of code that make the multi-click logic
var multiClickStream = btn1ClickStream
    .buffer( function( ) { 
        return btn1ClickStream.throttle(250); 
    })
    .filter( function( x ) { 
        return x.length >= 2; 
    })
 
multiClickStream.subscribe( function (e) {
    console.log( e );
});
