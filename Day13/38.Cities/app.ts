// Define a function describe_city with two parameters: city and country (with default value 'USA')
function describe_city(city:string, country:string ='USA'){
//Return a string describing the city and its country
    return  `${city} is in ${country}`
}
// Log the description of Karachi in Pakistan
console.log(describe_city('Karachi', 'Pakistan'))

console.log(describe_city('Madrid','Spain'))

console.log(describe_city('New York'))