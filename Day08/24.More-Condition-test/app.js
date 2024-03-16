//declare & initialize email variable
var email = "Ahmed@gmail.com";
//declare & initialize pass variable.
var pass = "Pass";
//initialize array with names
var names = ['Usman', 'Ahmed', 'Nawaz'];
//compare email variable equal to the string.
console.log(email === "Ahmed@gmail.com");
//compare email variable not equl to the string
console.log(email !== "Ahmed@gmail.com");
//compare pass equal to pass
console.log(pass === "Pass");
//compare pass not equal to pass
console.log(pass !== "Pass");
//compare email value not equal to the string value converted to lowercase
console.log(email !== "Ahmed@gmail.com".toLowerCase());
//compare 16 is equal to 10
console.log(8 + 8 == 10);
//compare 16 not equal to 10.
console.log(8 + 8 != 10);
//compare 8 is greater than 16
console.log(8 > 16);
//compare 8 is smaller than 16
console.log(8 < 16);
//compare 8 is greater than or equal to 9
console.log(8 >= 9);
//compare 8 is smaller than or equal to 9
console.log(8 <= 9);
//compare 8+8 is equal to 16 & 20.
console.log(8 + 8 == 16 && 8 + 8 == 20);
//compare 8+8 equal to 16 or 20.
console.log(8 + 8 == 16 || 8 + 8 == 20);
//check the that's not in array.
console.log(!names.includes('Ahmedd'));
//check the value that's in array.
console.log(names.includes('Ahmed'));
