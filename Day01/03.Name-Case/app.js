//A person name is stored in a variable
var person_name = "Nasir ali khan";
//A function is created for changing the character at 0 index to uppercase and the rest part to lowercase.
function title(title) {
    console.log(title.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(); }).join(' '));
}
//The title function is called and the person_name variable is passed through that title function.
title(person_name);
