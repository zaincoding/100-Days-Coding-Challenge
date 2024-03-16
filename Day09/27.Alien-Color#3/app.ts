//Exercise 27: 

// Define a function to check if the provided color matches the color of an alien
function AlienColor(colors){
const Alien_color:string[] = ['Red','Green','Yellow'];
 return Alien_color.includes(colors)
}

// Condition to check if the alien color is green
if(AlienColor('Green')){
  console.log("The player earned 5 points")
}else{
    console.log("The player earned 10 points.")
}

// Conditions to determine points based on alien color
if(!AlienColor('Green')){
    console.log("The player earned 5 points.")
}else if(AlienColor('Yellow')){
    console.log("The player earned 15 points.")
}else{
    console.log("The player earned 10 points.")
}

// Another set of conditions to determine points based on alien color
if(!AlienColor('Green')){
  console.log("The player earned 5 points.")
}else if(!AlienColor('Yellow')){
    console.log("The player earned 15 points.")
}else{
    console.log("The player earned 10 points")
}






