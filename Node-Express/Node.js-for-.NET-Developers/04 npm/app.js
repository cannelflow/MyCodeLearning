var underscore = require("underscore");
var artists = ['Pharrel Williams', 'Led Zeppelin', 'Rolling Stones'];

underscore.each(artists, function (artist, index, artists) {
    console.log('artist: ' + artist);
});