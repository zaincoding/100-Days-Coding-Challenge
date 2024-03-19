// Define a function named rest_parameter that takes a rest parameter representing multiple hobbies
function rest_parameter(...args: string[]) {
  console.log("My hobbies are...");
  // Iterate over each hobby in the args array using forEach
  args.forEach((arg) => {
    console.log("I enjoy a, " + arg);
  });
}
// Call the rest_parameter function with multiple hobbies
rest_parameter("Cycling", "Hiking", "Video Gamning", "Coding");
