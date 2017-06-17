/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

   // The watch id references the current `watchAcceleration`
    var watchID = null;

    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        startWatch();
    }

    // Start watching the acceleration
    //
    function startWatch() {

        // Update acceleration every 3 seconds
        var options = { frequency: 100 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    // Stop watching the acceleration
    //
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                            'Acceleration Y: ' + acceleration.y + '<br />' +
                            'Acceleration Z: ' + acceleration.z + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
    var canvasHTML = document.getElementById('ball');
    var contextHTML = canvasHTML.getContext('2d');
    var x = canvasHTML.width/2; var y = canvasHTML.height/2;
    x=x+acceleration.x*10;
    y=y-acceleration.y*10;
    drawball(x,y)
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }

function drawline(){
    var canvasHTML = document.getElementById('ball');
    var contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeStyle =  "#000000";
    contextHTML.lineWidth = 2;
    contextHTML.beginPath();
    contextHTML.moveTo(canvasHTML.width/2, 0);
    contextHTML.lineTo(contextHTML.width/2, contextHTML.height);
    contextHTML.stroke();
    contextHTML.closePath();
}

function drawball(x,y){
    var canvasHTML = document.getElementById('ball');
    var contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeRect(0,0,canvasHTML.width, canvasHTML.height);
    var radiusClock = canvasHTML.width/10 - 10;
    var xCenterClock = x
    var yCenterClock = y
    contextHTML.fillStyle = "#ADD8E6";
    contextHTML.clearRect(0,0, canvasHTML.width, canvasHTML.height);
    contextHTML.fillRect(0,0,canvasHTML.width,canvasHTML.height);
    contextHTML.strokeStyle =  "#000000";
    contextHTML.lineWidth = 2;
    //lines
    contextHTML.strokeStyle =  "#000000";
    contextHTML.lineWidth = 2;
    contextHTML.beginPath();
    contextHTML.moveTo(canvasHTML.width/2, 0);
    contextHTML.lineTo(canvasHTML.width/2, canvasHTML.height);
    contextHTML.stroke();
    contextHTML.closePath();
    contextHTML.beginPath();
    contextHTML.moveTo(0, canvasHTML.height/2);
    contextHTML.lineTo(canvasHTML.width, canvasHTML.height/2);
    contextHTML.stroke();
    contextHTML.closePath();

    //-ball
    contextHTML.fillStyle =  "#483D8B";
    contextHTML.lineWidth = 3;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2*Math.PI, true);
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.fill();
    contextHTML.closePath();
    //-smallball
    contextHTML.fillStyle =  "#ffffff";
    contextHTML.lineWidth = 1;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock-6, yCenterClock-6, radiusClock/1.7, 0, 2*Math.PI, true);
    contextHTML.moveTo(xCenterClock-6, yCenterClock-6);
    contextHTML.fill();
    contextHTML.closePath();
        //-filling
    contextHTML.fillStyle =  "#483D8B";
    contextHTML.lineWidth = 1;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock/1.4, 0, 2*Math.PI, true);
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.fill();
    contextHTML.closePath();
    return;
}


window.onload = function(){
    var canvasHTML = document.getElementById('ball');
    drawball(canvasHTML.width/2,canvasHTML.height/2);
}


function myEventHandler() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!" ;
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

    alert(str) ;
    
}


// ...additional event handlers here...
