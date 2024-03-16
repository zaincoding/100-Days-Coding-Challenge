//Exercise 25: Alien Color.

//Alien colors
const Alien_color:string[] =['Green','Yellow','Red'];

//if the alien color is green run the blocks code.
if ((Alien_color.includes('Green'))){
    console.log("The player earned 5 points")
}
//if the alien color is not green run the code.
if(!Alien_color.includes('Green')){
    console.log('The player earned 10 points.')
}

