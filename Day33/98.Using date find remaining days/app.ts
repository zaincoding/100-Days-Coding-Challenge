// Define a specific date
const  date = new Date('2024-12-31')
//get  current date
const  currentDate = new Date();
//Calculate the time difference b/w two dates
const timeLeft = date.getTime() - currentDate.getTime();
//Convert the time from millisecond to days
const dayleft = Math.ceil(timeLeft /(1000*60*60*24))
//Output the result.
console.log(dayleft)