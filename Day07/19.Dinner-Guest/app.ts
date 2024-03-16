//Exercise 14: Guest list.

//array is create three element are tored in it.
const guests:string[] = ['Ahmed','jawad','nasir'];
//Array elements assigned to different variables by using keyword const one time.
const guest1 =  guests[0], guest2 = guests[1], guest3 = guests[2];
//print each value of guest list.
console.log(guest1);
console.log(guest2);
console.log(guest3);


//Exercise 15: Replacing guest.

//New variables declared and assigned value
const absentguest = guest2, new_guest = "jameel";
//The absent guest is replaced by the new one.
guests[guests.indexOf(absentguest)] =new_guest;
//print the absent guest
console.log(`\nAbsent Guest.... ${absentguest}`)
//print that absent is replace by new one.
console.log(`${absentguest}, is replaced by ${new_guest}\n`)

for(const guest of guests){
    console.log(`${guest}, you are invited to dinner.`)
}


//Exercise 16: More Guests:
//print a statement.
console.log('\nI found a bigger dinner table');
//add value in the beginning of the list.
guests.unshift('Usman');
//add the value at the second position of the array
guests.splice(1,0,'Younis');
//ad the value at the end of the array list
guests.push('Ali');
//printing new the guests list
for(const guest of guests){
console.log(guest)
}

//Exercise 17: Shrinking Guest list
console.log(`\nI can invite only two guests for dinner.`);
//pop all the value greater than two.
while(guests.length > 2){
  //store the removed value in a new variable.
  const removedGuest =  guests.pop();
  //print the removed value with an apology statement.
  console.log(`Sorry!: ${removedGuest}, You are no longer invited.\n`)
}
//print the remining guests list 
for(const guest of guests){
    console.log(`${guest}, You are still invited.`)
}
 //remove all the element.
while(guests.length > 0){
   guests.pop()
}
console.log(guests);


//Exercise 18:Seing the world.

let capital_cities:string[] = ['Islamabad','Istanbol','Moscow','London','Washington'];
//print array in original form.
console.log(capital_cities);
//print array in alphabetical order without modifying the original one.
console.log([...capital_cities].sort());
//print original array.
console.log(capital_cities);

//print the array in reverse alphabitical order without modifying the original one.
console.log([...capital_cities].sort().reverse());
//print the original one.
console.log(capital_cities);

//change the original list in reverse order
capital_cities.reverse();
console.log(capital_cities);

//Reverse the order list again to show that it come back to it's original form.") 
capital_cities.reverse();
console.log(capital_cities)

//sort the array in alphabitical order
capital_cities.sort();
console.log(capital_cities.sort)

//sort the array in reverse alphabitical order.
capital_cities.sort().reverse();
console.log(capital_cities);


//store the guest length value in a new variable
const numberGuest:number = guests.length;
//print the remaining guest listvalue.
console.log(`Number of guest invited to the dinner, ${numberGuest}.`);