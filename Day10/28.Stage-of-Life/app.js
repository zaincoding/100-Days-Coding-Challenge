var ages = [1, 2, 4, 13, 20, 65];
function checkage(age) {
    if (age < 2) {
        console.log("The person is a baby.");
    }
    else if (age == 4 && age < 13) {
        console.log("The person is a kid .");
    }
    else if (age == 13 && age < 20) {
        console.log("The person is a teenager.");
    }
    else if (age == 20 && age < 65) {
        console.log("The person is an adult.");
    }
    else if (age > 65) {
        console.log("The person is an elder");
    }
}
ages.find(checkage);
