// Define an array of laptop objects
const Laptop = [
  { make: "Dell", model: "XPS 15", year: 2022 },
  { make: "HP", model: "HP 15", year: 2023 },
  { make: "Dell", model: "XPS 15", year: 2024 },
];
// Destructure the array to extract the first and third laptops
const [firstlaptop, , thirdLaptop] = Laptop;
// Log the extracted laptops to the console
console.log(firstlaptop, thirdLaptop);
