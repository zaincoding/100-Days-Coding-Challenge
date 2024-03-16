//A car interface is defined.
interface Cars{
    make:string;
    model:string;
    year:number;
    color:string;
    price?:number;
}
//An object is created for a car.
const car:Cars = {
    make:"Honda",
    model:"Civic",
    year: 2020,
    color:"black"
}
//print the information about the car.
console.log(car)