function AlienColor(colors) {
    var Alien_color = ['Red', 'Green', 'Yellow'];
    return Alien_color.includes(colors);
}
if (AlienColor('Green')) {
    console.log("The player earned 5 points");
}
else {
    console.log("The player earned 10 points.");
}
if (!AlienColor('Green')) {
    console.log("The player earned 5 points.");
}
else if (AlienColor('Yellow')) {
    console.log("The player earned 15 points.");
}
else {
    console.log("The player earned 10 points.");
}
if (!AlienColor('Green')) {
    console.log("The player earned 5 points.");
}
else if (!AlienColor('Yellow')) {
    console.log("The player earned 15 points.");
}
else {
    console.log("The player earned 10 points");
}
