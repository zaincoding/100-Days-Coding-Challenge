//.18
let capital_cities:string[] = ['Islamabad','Istanbol','Moscow','London','New Yourk'];
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
