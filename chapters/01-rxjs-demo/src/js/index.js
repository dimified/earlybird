/*
var source = Rx.Observable.range(0, 3)
    .map( function (x) { 
        return Rx.Observable.range(x, 3).delay(1000); 
    })
    .concatAll();

source.forEach(function(x){
    console.log(x)
});

var subscription = source.subscribeOnCompleted(
    function () {
        console.log('Completed');
    }
);
*/


/*
var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
},
function (err) {
    console.log('Error: %s', err);
},
function () {
    console.log('Completed');
});
*/

/*var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

var btn1ClickStream = Rx.Observable.fromEvent( btn1, 'click' );
var btn2ClickStream = Rx.Observable.fromEvent( btn2, 'click' );

var merged = Rx.Observable.merge(btn2ClickStream, btn1ClickStream);

// The 4 lines of code that make the multi-click logic
var multiClickStream = merged
    .buffer( function( e ) { 
        return merged.throttle(250); 
    })
    .filter( function( x ) { 
        return x.length >= 2; 
    });

var multiclickStream2 = Rx.Observable.fromEvent( merged, 'click' )
    .debounce( 500 );

multiClickStream.subscribe( function (e) {
    console.log( e );
});*/



/*
var refreshButton = document.querySelector('.refresh');
var closeButton1 = document.querySelector('.close1');
var closeButton2 = document.querySelector('.close2');
var closeButton3 = document.querySelector('.close3');

var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');
var close1ClickStream = Rx.Observable.fromEvent(closeButton1, 'click');
var close2ClickStream = Rx.Observable.fromEvent(closeButton2, 'click');
var close3ClickStream = Rx.Observable.fromEvent(closeButton3, 'click');

var requestStream = refreshClickStream.startWith('startup click')
    .map(function() {
        var randomOffset = Math.floor(Math.random()*500);
        return 'https://api.github.com/users?since=' + randomOffset;
    });

var responseStream = requestStream
    .flatMap(function (requestUrl) {
        return Rx.Observable.fromPromise($.getJSON(requestUrl));
    });

function createSuggestionStream(closeClickStream) {
    return closeClickStream.startWith('startup click')
        .combineLatest(responseStream,
            function(click, listUsers) {
                return listUsers[Math.floor(Math.random()*listUsers.length)];
            }
        )
        .merge(
            refreshClickStream.map(function(){ 
                return null;
            })
        )
        .startWith(null);
}

var suggestion1Stream = createSuggestionStream(close1ClickStream);
var suggestion2Stream = createSuggestionStream(close2ClickStream);
var suggestion3Stream = createSuggestionStream(close3ClickStream);


// Rendering ---------------------------------------------------
function renderSuggestion(suggestedUser, selector) {
    var suggestionEl = document.querySelector(selector);
    if (suggestedUser === null) {
        suggestionEl.style.visibility = 'hidden';
    } else {
        suggestionEl.style.visibility = 'visible';
        var usernameEl = suggestionEl.querySelector('.username');
        usernameEl.href = suggestedUser.html_url;
        usernameEl.textContent = suggestedUser.login;
        var imgEl = suggestionEl.querySelector('img');
        imgEl.src = "";
        imgEl.src = suggestedUser.avatar_url;
    }
}

suggestion1Stream.subscribe(function (suggestedUser) {
    renderSuggestion(suggestedUser, '.suggestion1');
});

suggestion2Stream.subscribe(function (suggestedUser) {
    renderSuggestion(suggestedUser, '.suggestion2');
});

suggestion3Stream.subscribe(function (suggestedUser) {
    renderSuggestion(suggestedUser, '.suggestion3');
});*/