//created guest list array stored three value in it.
const guest:string[]= ['Ahmed','Bilal','jawad'];

//index number is used to access guest list value,printing a statement with each one.
console.log(`${guest[0]}, you are invited to dinner.`);
console.log(`${guest[1]}, you are invited to dinner.`);
console.log(`${guest[2]}, you are invited to dinner.\n`);

//to store index 1 value in absent_guest variable before updation.
const absent_guest = guest[1];
//index 1 value is updated.
       guest[1] = 'Nasir';
//the value stored in absent_guest varuable is printed with statement
console.log(`Absent Guest....${absent_guest}`)
//the value before updation and after apdation is printed with statement.
console.log(`${absent_guest} is replaced by ${guest[1]}\n`);

console.log("Our new guest list")
//guest values at different index number and a statement with each element is printed. 
console.log(`${guest[0]}, you are invited to dinner.`);
console.log(`${guest[1]}, you are invited to dinner.`);
console.log(`${guest[2]}, you are invited to dinner.`);