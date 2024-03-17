//Define a function make_car.
//This function creates a car object based on the provided make, model, and additional properties.
function make_Car(make, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    //Initialize a new car object with the provided make  and model
    var car = {
        make: make,
        model: model,
    };
    //Iterate over each additional property provided in args.
    args.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        //Add each additional property to the car object.
        car[key] = value;
    });
    //return the constructed car object.
    return car;
}
//call the function with the additional property.
console.log(make_Car('Toyota', 'Camery', ['color', 'blue'], ['Year', '2022']));
