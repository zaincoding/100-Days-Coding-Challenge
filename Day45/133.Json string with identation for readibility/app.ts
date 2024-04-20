//Coding challenge:Day45

//Define object myObj with specific properties and their types
const myObj:{
    name:string,
    age:number
    email:string
} = {
//Initialize the properties of my object with specific values.
    name:'Sajid',
    age: 25,
    email: 'example@gmail.com'
}
//Log the converted json string to the console
console.log(JSON.stringify(myObj))
//Log the converted json string with identation to the console
 console.log(JSON.stringify(myObj,null,4))

 