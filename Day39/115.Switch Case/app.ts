    //Coding challenge:Day39
    
   let day; //Declare a variable'day'
   //using switch statement to assign the current day of the week.
   switch (new Date().getDay()) {

    case 0:
    day = "Sunday."//if it is sunday '0', assign 'Sunday' to the 'day' variable 
    break;

    case 1:
    day = "Monday"//if it is monday '1', assign 'Monday' to the  variable.
    break;

    case 2:
    day = "Tuesday"//if it is  tuesday '2', assign 'Tuesday' to the  variable.
    break;

    case 3:
    day = 'Wednesday'
    break;

    case 4:
    day = 'Thursday'

    case 5:
    day = 'Friday'

    case 6:
    day = 'Saturday'

    default:
    day = "Try again"//If none of the above case match,assign try again to the 'day' variable
    break;

 }
 //Output the result based on the current day of the week.
console.log(day)
