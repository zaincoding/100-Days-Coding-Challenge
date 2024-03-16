//Exercise 39: City Names.
console.log("Exercise: 39");
// deifne the function with two parameters: city and country.
function city_country(city, country) {
    //log the combined string of city and country in the specified formate.
    return "\"".concat(city, ", ").concat(country, "\"");
}
//Call the function with city and country value as parameters and store the result in the variables.
var cityCountry = city_country('Lahore', 'Pakistan');
var cityCountry1 = city_country('London', 'United Kingdom');
var cityCountry2 = city_country('New York', 'USA');
//Output the result of the function calls.
console.log(cityCountry);
console.log(cityCountry1);
console.log(cityCountry2);
console.log("\nExercise: 40");
//Exercise 40: make albue.
//define a function named make_album which takes two string parameters: artist and title.
function make_album(artist, title, track) {
    //create an object name album with properties artist and title.
    var album = {
        artist: artist,
        title: title,
    }; //Return the album object.
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
//Call the function with artist and album value as parameters and store the result in the variables.
var album = make_album('artist 1', 'album 1', 125);
var album1 = make_album('artist 2', 'album 2');
var albue2 = make_album('artist 3', 'album 3');
//Return the album object.
console.log(album);
console.log(album1);
console.log(albue2);
//Exercise 41: Magicians.
console.log("\nExercise: 41");
//define an array of magician names.
var magicians = ['Ahmed', 'Tariq', 'Amir', 'Nasir'];
//define a function to display magician names
function show_magicians(magicians) {
    //iterate over each magician and log their name
    magicians.forEach(function (magician) { return console.log(magician); });
}
//Call the function to display the original list of magician names.
show_magicians(magicians);
//Exercise 42:Great Magicians:
console.log("\nExercise 42:Great Magicians");
//Define a function to modify magician names by adding "The Great" prefix.
function make_great(magicians) {
    //Iterate over each magician
    for (var i = 0; i < magicians.length; i++) {
        //modify the magician's name by adding "The Great" prefix and log to the console.
        console.log(magicians[i] = "The Great ".concat(magicians[i]));
    }
}
//Call the function to modify magician names
make_great(magicians);
console.log("\n");
//call the function again to modified list of magician names
show_magicians(magicians);
