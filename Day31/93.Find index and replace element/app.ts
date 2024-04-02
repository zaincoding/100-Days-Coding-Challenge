//Define an array called 'fruits' containing four strings.
const fruits: string[] = ["apple", "mango", "orange", "banana"];
//Define a variable called 'replace' assign string value 'Pineapple'
const replace = "Pineapple";
// Replace the element in the 'fruits' array that matches 'orange'
// with the value stored in the 'replace' variable.
fruits[fruits.indexOf("orange")] = replace;
//Output the modifeid 'fruits' array to the console.
console.log(fruits); //Output ['apple','mango','orange','Pineapple']
