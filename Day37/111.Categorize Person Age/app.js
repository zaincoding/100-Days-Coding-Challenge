//Define an array of ages
var ages = [13, 19, 20, 25];
//Define a function to find the age category
function findAge(age) {
    //check if the age equal to 13
    if (age === 13) {
        console.log("The person is a child.");
    }
    else if (age >= 13 && age <= 19) {
        console.log("The person is a teenage");
    }
    else if (age >= 19 && age <= 20) {
        console.log("The person is an adult");
    }
    else {
        console.log("The person is older");
    }
}
ages.forEach(findAge);
