//Coding Challenge:Day37

//Create a new date object to get the current date and time
const currentDate: Date = new Date();
//Extracting the hour and minute from the current date.
const hours: number = currentDate.getHours();
const minuts: number = currentDate.getMinutes();
//Create a string representing the current time.
const time = `It's time ${hours}:${minuts}`;
//chekc if time is before noon 12:00pm
if (hours < 12) {
  //If it's before noon time logging "Good morning" message
  console.log("Good morning ");
} else {
  //it it is noon or later time, logging the current time.
  console.log(time);
}
