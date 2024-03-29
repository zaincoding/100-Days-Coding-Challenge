//Create an object 
var myObject = {
    brand: 'Oppo',
    mode: 'Reno 11F',
    ram: '4GB',
    screen: '4inch',
    year: 2024,
};
//Using for in loop in the function to log all the property of the object.
function myFunction(value) {
    for (var key in value) {
        console.log("".concat(key, ": ").concat(value[key]));
    }
}
//call the function
myFunction(myObject);
