// Get current date
var currentDate = new Date();
// Extract day, month, and year from the current date
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
//Add 0 to day, month if necessary
var dayFormat = day < 10 ? '0' + day : day.toString();
var monthFormat = month < 10 ? '0' + month : month.toString();
// Concatenate day, month, and year with slashes to form a date string
var dateFormat = "".concat(dayFormat, " / ").concat(monthFormat, " / ").concat(year);
//Output the result to the console.
console.log(dateFormat);
