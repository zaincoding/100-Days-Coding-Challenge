//Coding Challenge:Day38

//Define a Map to store country-capital
const countryCapital: Map<string,string> = new Map();
//Add key-value pairs to the map.
     countryCapital.set('Pakistan', 'Islamabad');
     countryCapital.set('USA', 'Washington,D.C');
     countryCapital.set('Canada', 'Ottawa');
     
//Define a function to retive the capital of a country.
function countryCaps(country:string):string |undefined{
//Check if the country exist.
     if(countryCapital.has(country)){
    //If the condition true return it's capital.
       return countryCapital.get(country)
     }//if the condition false return undefined.
       return undefined;
     }
     //Output the result to the console.
     console.log(countryCaps('Pakistan'));














