// Get current date
const currentDate = new Date();

// Extract day, month, and year from the current date
const day:number =currentDate.getDate();
const month:number = currentDate.getMonth() +1;
const year:number = currentDate.getFullYear();

//Add 0 to day, month if necessary
const dayFormat = day<10 ? '0' + day: day.toString();
const monthFormat = month< 10 ? '0'  + month: month.toString();

// Concatenate day, month, and year with slashes to form a date string
const dateFormat = `${dayFormat} / ${monthFormat} / ${year}`;
//Output the result to the console.
console.log(dateFormat);