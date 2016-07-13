/* jshint browser: true */
/*globals $:false */

// Create a centered text item at the center of the view:
var sound = new Howl({
  urls: ["Sounds/clay.mp3"]
});

var circles = [];
function onKeyDown(event) {
    sound.play();
    var maxPoint = new Point(view.size.width,view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint*randomPoint;
    var myCircle = new Path.Circle(point, 500);
    myCircle.fillColor = 'orange';
    circles.push(myCircle);
}

function onFrame(event) {
    for (var i = 0;i <  circles.length; i++) {
     circles[i].fillColor.hue += 1; circles[i].scale(.9);  
    }
}