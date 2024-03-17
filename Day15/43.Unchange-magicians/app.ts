console.log("\nExercise 39:City Names.");
//Define a function that takes two parameters: city and country.
function city_country(city: string, country: string) {
  //define a combined string of city and country in a specific formate.
  return `"${city}, ${country}"`;
}
//call the function with city ad country value and store the result in different variables.
const cityCountry1 = city_country("Lahore", "Pakistan");
const cityCountry2 = city_country("Lahore", "Pakistan");
const cityCountry3 = city_country("Lahore", "Pakistan");
//Output the result of the function call.
console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);

//Exercise 40:Album
console.log("Exercise 40:Album");
//Define a function called make_album that takes in three parameters: artist, title and an option track number.
function make_album(artist: string, title: string, track?: number) {
  //define an object album to store artist ,title and track information.
  const album: { artist: string; title: string; track?: number } = {
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
const album1 = make_album("artist 1", "album 1", 98);
const album2 = make_album("artist 2", "album 2");
const album3 = make_album("artist 3", "album 3");
//Output the result of the function call.
console.log(album1);
console.log(album2);
console.log(album3);

//Exercise 41: Magicians
//console.log('\nExercise 41: Magicians');
//Define magicians array of magician names
const Magicians: string[] = ["Ahmed", "Naveed", "Tariq", "Abid"];
//Define a function to display magician names
function show_magician(magicians: string[]) {
  return magicians;
}
//function to modify magicians to "the Great"
function make_great(magicians: string[]) {
  //Iterate over each magician.
  for (let i = 0; i < magicians.length; i++) {
    //Modify the magician's name to include "The Great"
    magicians[i] = `The Great ${magicians[i]}`;
  }
  return magicians;
}
console.log("\nExercise 41: Magicians");
//Output the result of original array.
console.log(show_magician(Magicians));

console.log(`\nExercise 42:Great Magicians`);
//Creating a copy before modifying
const makeGreat = make_great(Magicians.slice());
//Output the result of modified array
console.log(make_great(makeGreat));

console.log(`\nExercise 43:Unchange magicians`);
//Original array remain unchanged.
console.log(show_magician(Magicians));
