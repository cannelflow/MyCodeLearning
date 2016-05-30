/*
function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();
*/

/*
function a() {
    function b() {
        console.log(myVar);
    }
    var myVar = 2;
    b();
}

var myVar = 1;
a();
*/
function a() {
    function b() {
        console.log(myVar);
    }
    b();
}

var myVar = 1;
a();
