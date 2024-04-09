//Coding Cahllenge:Day38

//Define a Map called 'studentInfo' to store student information
const studentInfo: Map<string,string> = new Map();
//Add key-value pair to the map
studentInfo.set('Name', 'Ahmed');
studentInfo.set('ID', 'Ahmed_123@gmail.com')
//iterate ove the entrie of Map,
 studentInfo.forEach((value, key) => {
   //Output the key-value pair to the console.
    console.log(`${key}: ${value}`)
 })