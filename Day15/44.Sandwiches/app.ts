//Define a function make_sandwich that takes any number of string items as argument.
function make_sandwiches(...items: string[]) {
  console.log("Make sandwiche with the following items:");

  //iterate over each item in the items array.
  items.forEach((item) => {
    //print each item proceded by a dash.
    console.log("_ " + item);
  });
  console.log("Enjoy you Sandwich!\n");
}

//Call the function three times with different number of arguments.
make_sandwiches(
  "Roast Beef",
  "Cheddar Cheese",
  "Lettuce",
  "Tomato",
  "Mayonnaise"
);
make_sandwiches("Turkey Breast", "Swiss cheese", "Bacon", "Avocado", "Muatard");
make_sandwiches("Ham", "Provolone cheese", "Red Onion", "Dijon Mustard");
