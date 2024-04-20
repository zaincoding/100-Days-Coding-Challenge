//Coding challenge:Day45

//Define object calle myObject
const myObject:{
    name:string,
    age: number,
    email: string
}={
    name:'Sajid',
    age:25,
    email:`example@gmail.com`
}
//Output the result of myobject to the console.
console.log(myObject);
//Convert javscript object to json string.
console.log(JSON.stringify(myObject))