/*global prompt,alert,console*/
/*jslint plusplus: true */
var movieDB = [
    {
        title: "Dark Night",
        rating: 4.5,
        watched: false
    },
    {
        title: "Pulp Fiction",
        rating: 4.7,
        watched: true
    },
    {
        title: "Eagles Eye",
        rating: 4.1,
        watched: true
    },
    {
        title: "Harry Potter",
        rating: 4.1,
        watched: true
    }
];
//var i;
//for (i = 0; i < movieDB.length; i++) {
//    var result = "You Have ";
//    if (movieDB[i].watched === true) {
//        result += 'Watched ';
//    } else {
//        result += 'Not Seen ';
//    }
//    console.log(result += movieDB[i].title + " And Rating Is " + movieDB[i].rating + " Star");
//}
//movieDB.forEach(function (movie) {
//    'use strict';
//    var result = "You Have";
//    if (movie.watched === true) {
//        result += "Watched ";
//    } else {
//        result += "Not Seen ";
//    }
//    result += movie.title + 'And Rating Is ' + movie.rating + " Star";
//    console.log(result);
//});
function makeResult(movie) {
    'use strict';
    var result = "You Have";
    if (movie.watched === true) {
        result += "Watched ";
    } else {
        result += "Not Seen ";
    }
    result += movie.title + 'And Rating Is ' + movie.rating + " Star";
    return result;
}
movieDB.forEach(function (movie) {
    'use strict';
    console.log(makeResult(movie));
});