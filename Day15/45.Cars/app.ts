//Define an interface.
//This interface specifies the structure of a car object
interface Car {
  make: string;
  model: string;
  [key: string]: any; //Allows for the additional dynamic properties of any type.
}
//Define a function make_car.
//This function creates a car object based on the provided make, model, and additional properties.
function make_Car(make: string, model: string, ...args: [string, any][]) {
  //Initialize a new car object with the provided make  and model
  const car: Car = {
    make,
    model,
  };
  //Iterate over each additional property provided in args.
  args.forEach(([key, value]) => {
    //Add each additional property to the car object.
    car[key] = value;
  });
  //return the constructed car object.
  return car;
}
//call the function with the additional property.
console.log(make_Car("Toyota", "Camery", ["color", "blue"], ["Year", "2022"]));
