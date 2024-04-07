//Define a function to calculate the leapyear either condition true.
function isLeapYear(year:number):boolean{
     return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
}
//Output the result.
console.log(isLeapYear(2020))
console.log(isLeapYear(2019))