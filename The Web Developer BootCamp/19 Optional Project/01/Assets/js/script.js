/* jshint browser: true */
/*globals $:false */	

//create straight line
	var path = new Path();
	path.strokeColor = 'black';
	var start = new Point(100, 100);
	path.moveTo(start);
	path.lineTo(start + [ 100, 120 ]);

//create circle
var myCircle = new Path.Circle(new Point(250, 70), 50);
myCircle.fillColor = 'black';

//create rectangle
var rectangle = new Rectangle(new Point(150, 150), new Point(250, 200));
var path = new Path.Rectangle(rectangle);
path.fillColor = '#e9e9ff';
path.selected = true;