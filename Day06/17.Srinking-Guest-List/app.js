//created guest list array stored three value in it.
var guest = ['Ahmed', 'Bilal', 'jawad'];
//index number is used to access guest list value,printing a statement with each one.
console.log("".concat(guest[0], ", you are invited to dinner."));
console.log("".concat(guest[1], ", you are invited to dinner."));
console.log("".concat(guest[2], ", you are invited to dinner.\n"));
//to store index 1 value in absent_guest variable before updation.
var absent_guest = guest[1];
//index 1 value is updated.
guest[1] = 'Nasir';
//the value stored in absent_guest varuable is printed with statement
console.log("Absent Guest....".concat(absent_guest));
//the value before updation and after apdation is printed with statement.
console.log("".concat(absent_guest, " is replaced by ").concat(guest[1], "\n"));
console.log("Our new guest list");
//guest values at different index number and a statement with each element is printed. 
console.log("".concat(guest[0], ", you are invited to dinner."));
console.log("".concat(guest[1], ", you are invited to dinner."));
console.log("".concat(guest[2], ", you are invited to dinner."));
//printing a statement.
console.log("\nI fount a bigger dinner table.");
//add value at beginning
guest.unshift("Danish");
//add value at index 1 position. 
guest.splice(1, 0, "Fahim");
//add value at the ending
guest.push("younis");
//printi the value from index 0 to index 5.
console.log("".concat(guest[0], ", you are invited to dinner."));
console.log("".concat(guest[1], ", you are invited to dinner."));
console.log("".concat(guest[2], ", you are invited to dinner."));
console.log("".concat(guest[3], ", you are invited to dinner."));
console.log("".concat(guest[4], ", you are invited to dinner."));
console.log("".concat(guest[5], ", you are invited to dinner."));
//print a statement for the invitables.
console.log("\nI can invite two people for dinner.");
var guest1 = guest.pop(), guest2 = guest.pop(), guest3 = guest.pop(), guest4 = guest.pop();
//An apology statement for each guest.
console.log("Sory! ".concat(guest1, ", You are no longer invited."));
console.log("Sory! ".concat(guest2, ", You are no longer invited."));
console.log("Sory! ".concat(guest3, ", You are no longer invited."));
console.log("Sory! ".concat(guest4, ", You are no longer invited."));
//print the remined two value.
console.log("\n ".concat(guest[0], ", you are still invited."));
console.log("".concat(guest[1], ", you are still invited.\n"));
//remove the last two value
guest1 = guest.pop(), guest2 = guest.pop();
//An empty list.
console.log(guest);
