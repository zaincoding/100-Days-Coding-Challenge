//Exercise 40:Make Album
console.log('Exercise 40')
// Define a function called make_album that takes in three parameters: artist, title, and an optional track number
function make_album(artist:string, title:string,track?:number){
// Define an object called dictionaries to store artist, title, and optionally track
const dictionaries:{artist:string, title:string,track?:number} ={
    // Capitalize the first letter of the artist name and title
    artist:artist.charAt(0).toUpperCase()+ artist.slice(1),
    title:title.charAt(0).toUpperCase() + title.slice(1)
}
// Check if the track parameter is provided
if (track != undefined){
// If provided, add the track number to the dictionaries object
dictionaries.track = track;

}
 // Return a string containing the capitalized artist and title, and if available, the track number
  return  `${dictionaries.artist}, ${dictionaries.title}, ${dictionaries.track !== undefined ?'track: ' + dictionaries.track:''} ;`
}
// Call the make_album function with provided arguments and store the result in artist1 and artist2 variables
const artist1 = make_album('artist 1', 'album 1', 123);
const artist2 =make_album('artist 2', 'album 2');

// Print the results
console.log(artist1)
console.log(artist2)