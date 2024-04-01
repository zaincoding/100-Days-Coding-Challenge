//Define a variable 'text'
const text: string = "Learning javaScript is easier the java.";
//Define a function to check that a substring is present in a string.
function textChecking(check) {
  //The 'includes' method checks the substring 'javascript' 
  //is present in the input 'check' string.
  let ch1 = check.includes("javaScript");
  //Return trun if the substring is found , if not return false.
  return ch1;
}

//Call the function with the text variable as an argument and output the result.
console.log(textChecking(text));
