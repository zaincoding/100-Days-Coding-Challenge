//Create an object 
let myObject = {
    brand: 'Oppo',
    mode: 'Reno 11F',
    ram: '4GB',
    screen: '4inch',
    year: 2024,
}
//Using for in loop in the function to log all the property of the object.
function myFunction(value){
     for(const key in value){
    console.log(`${key}: ${value[key]}`)      
    }

}
//call the function
myFunction(myObject)


