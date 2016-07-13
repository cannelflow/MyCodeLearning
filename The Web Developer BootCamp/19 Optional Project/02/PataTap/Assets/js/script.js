/* jshint browser: true */
/*globals $:false */

//create circle
for (var x = 0; x <= 1000; x += 100) {
    for (var y =0; y <=1000; y +=100) {
        var myCircle = new Path.Circle(new Point(x, y), 10);
myCircle.fillColor = 'red';
    }
}