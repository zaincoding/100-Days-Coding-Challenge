// Get the current date
const currentDate:Date = new Date();
//Define birthDate
const birthDate:Date = new Date('2000-6-6');
//Get current year from the current date.
const theYear:number = currentDate.getFullYear();

//Create a new date object representing birthday event.
const birthDay: Date = new Date(theYear, birthDate.getMonth(), birthDate.getDay());

//Check if the birth day already occured.
if(birthDay.getTime() <= currentDate.getTime()){
//if it is occured, set it to the next year.
   birthDate.setFullYear(theYear +1);
}
//Output the result.
console.log(birthDay)



