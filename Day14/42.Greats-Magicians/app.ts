//Exercise 39: City Names.
console.log(`Exercise: 39`);

// deifne the function with two parameters: city and country.
function city_country(city:string, country:string){
  //log the combined string of city and country in the specified formate.
  return `"${city}, ${country}"`   
}
 //Call the function with city and country value as parameters and store the result in the variables.
const cityCountry =city_country('Lahore','Pakistan')
const cityCountry1 =city_country('London','United Kingdom')
const cityCountry2 =city_country('New York','USA')
//Output the result of the function calls.
console.log(cityCountry);
console.log(cityCountry1);
console.log(cityCountry2);

console.log(`\nExercise: 40`);

//Exercise 40: make albue.
//define a function named make_album which takes two string parameters: artist and title.
function make_album(artist:string, title:string,track?:number){
//create an object name album with properties artist and title.
 const album:{artist:string,title:string,track?:number}= {
          artist:artist,
          title:title,
      
 }//Return the album object.
 if(track !==undefined){
   album.track = track;
 }
  return album;
}
//Call the function with artist and album value as parameters and store the result in the variables.
const album = make_album('artist 1', 'album 1', 125);
const album1 = make_album('artist 2','album 2');
const albue2 = make_album('artist 3', 'album 3');
//Return the album object.
console.log(album);
console.log(album1);
console.log(albue2)

//Exercise 41: Magicians.
console.log(`\nExercise: 41`);
//define an array of magician names.
const magicians:string[] =['Ahmed','Tariq','Amir','Nasir'];
//define a function to display magician names
function show_magicians(magicians:string[]){
   //iterate over each magician and log their name
    magicians.forEach(magician => console.log(magician))
}
//Call the function to display the original list of magician names.
 show_magicians(magicians);

//Exercise 42:Great Magicians:
console.log("\nExercise 42:Great Magicians")
//Define a function to modify magician names by adding "The Great" prefix.
function make_great(magicians:string[]){
//Iterate over each magician
for (let i=0; i<magicians.length; i++){
//modify the magician's name by adding "The Great" prefix and log to the console.
 console.log(magicians[i] = `The Great ${magicians[i]}`);
}
  }
//Call the function to modify magician names
 make_great(magicians)
console.log("\n")
//call the function again to modified list of magician names
show_magicians(magicians)