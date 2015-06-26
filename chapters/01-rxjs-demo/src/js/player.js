var Player = function(){}

Player.prototype = {
    videoConfig: {
        url: "http://url",
        drm: {
            url: "http://drmurl",
            type: "widevine"
        }

    },
    init: function(){
        return Rx.Observable.just(this.videoConfig).delay( 1000 ); 
    },
    initDrm: function( drm ){
        // do some async stuff and return observable
        return Rx.Observable.just( drm.url ).delay( 1000 ); 
    },
    cancel: function () {
        var cancelBtn = document.getElementById("cancel");
        return Rx.Observable.fromEvent( cancelBtn, "click" ); 
    }
}

var player = new Player();


var playVideoStream = 
    player
        .init()
        .map(function ( videoConfig ){
            console.log( videoConfig );
            return player.initDrm( videoConfig.drm )
                .map( function( result ){
                    return Rx.Observable.just( "Drm url result " + result ).delay( 1000 ); 
                })
                .concatAll();
        })
        .concatAll()
        .takeUntil(player.cancel())
        .subscribe(
            function ( x ) {
                console.log("On next: " + x);
            },
            function ( e ){
                console.log("on Error " + e);
            },
            function () {
                console.log("completed")
            }
        );