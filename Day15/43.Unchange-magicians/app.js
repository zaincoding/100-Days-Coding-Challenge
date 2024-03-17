console.log("\nExercise 39:City Names.");
//Define a function that takes two parameters: city and country.
function city_country(city, country) {
    //define a combined string of city and country in a specific formate.
    return "\"".concat(city, ", ").concat(country, "\"");
}
//call the function with city ad country value and store the result in different variables.
var cityCountry1 = city_country('Lahore', 'Pakistan');
var cityCountry2 = city_country('Lahore', 'Pakistan');
var cityCountry3 = city_country('Lahore', 'Pakistan');
//Output the result of the function call.
console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
//Exercise 40:Album
console.log("Exercise 40:Album");
//Define a function called make_album that takes in three parameters: artist, title and an option track number.
function make_album(artist, title, track) {
    //define an object album to store artist ,title and track information.
    var album = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1).toLowerCase(),
        title: title.charAt(0).toUpperCase() + title.slice(1).toLowerCase(),
    };
    //check if the 'track' parameter is provided.If yes assign, it to the track property of the album object.
    if (track !== undefined) {
        album.track = track;
    }
    //return the 'album' object.
    return album;
}
//create three albums using the 'make_album' function with different parameters.
var album1 = make_album("artist 1", "album 1", 98);
var album2 = make_album("artist 2", "album 2");
var album3 = make_album("artist 3", "album 3");
//Output the result of the function call.
console.log(album1);
console.log(album2);
console.log(album3);
//Exercise 41: Magicians
//console.log('\nExercise 41: Magicians');
//Define magicians array of magician names
var Magicians = ['Ahmed', 'Naveed', 'Tariq', 'Abid'];
//Define a function to display magician names
function show_magician(magicians) {
    return magicians;
}
//Output the result of the function calls.
//const magician = show_magician(Magicians)
//console.log(magician)
//Exercise 42:Great Magicians
//console.log(`\nExercise 42:Great Magicians`)
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
    return magicians;
}
console.log('\nExercise 41: Magicians');
console.log(show_magician(Magicians));
console.log("\nExercise 42:Great Magicians");
var makeGreat = make_great(Magicians.slice());
console.log(make_great(makeGreat));
console.log("\nExercise 43:Unchange magicians");
console.log(show_magician(Magicians));
