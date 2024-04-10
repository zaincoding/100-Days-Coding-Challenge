//Coding Challenge:Day39

let season;
// Define a function named 'monthSeason' which takes a 'month' as input
function monthSeason(month){
    // Use a switch statement to determine the season based on the month
switch(month){
        // For months December, January, and February
    case 12:
    case 1:
    case 2:
    season = 'Winter'
break;
        // For months March, April, and May

    case 3: 
    case 4:
    case 5:
 season = 'Spring'
break;    
    case 6: 
    case 7:
    case 8:
    season = 'Summer'
break;
    case 9: 
    case 10:
    case 11:
    season = 'Autom'
// Default case for handling invalid month values 
    default:
        'The momth is not found.'
    break
    


}
    // Return a string indicating the season for the given month
return (`Season: ${season}`)
 }
// Call the monthSeason function with a specific month and log the result
 console.log(monthSeason(4))
