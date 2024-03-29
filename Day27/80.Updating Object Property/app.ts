//create an object named 'myObject'
let myObject:{
    brand:string;
    model:string;
    ram:string;
    screen:string;
    year:number;
} = {
    brand:'Oppo',
    model:'Reno 11f',
    ram: '4GB',
    screen: '4inch',
    year: 2024,
}
//Updat the year property.
myObject.year =  2021;

//Accessing object property using dot notation
console.log(`${myObject.brand}
${myObject.model} 
${myObject.ram} 
${myObject.screen} 
${myObject.year}`)

