var refreshButton = document.getElementById('refresh');
var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

var requestStream = refreshClickStream
    .map(function() {
        var randomOffset = Math.floor(Math.random() * 500);
        return 'https://api.github.com/users?since=' + randomOffset;
    });

var responseStream = requestStream
    .flatMap(function (requestUrl) {
        return Rx.Observable.create( function (observer) {
            getJson( requestUrl, observer );
            return function () {
                console.log('disposed');
            };
        });
    });

responseStream.subscribe(
    function( x ){
    },
    function(e){

    },
    function() {
        console.log("completed")
    }
);


function getJson(requestUrl, observer){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200){
                observer.onCompleted();
           }
           else if(xmlhttp.status == 400) {
                observer.onError('There was an error 400')
           }
           else {
                observer.onError('There was an error 400')
           }
        }
    }

    xmlhttp.open("GET", requestUrl, true);
    xmlhttp.send();
}