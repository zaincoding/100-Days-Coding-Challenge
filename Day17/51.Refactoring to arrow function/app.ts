//Define a function to calculate the area of a rectangle using the function 'keyword';
function rectangle(L: number, W: number) {
  // multiply the lenght and width to calculate the area and return result.
  return L * W;
}
//Define an arrow function to calculate the area of a rectangle.
const rectangle1 = (L: number, W: number) => L * W;
//Call the first rectangle function and pass argument 6L,4W to calculate the area of the rectangle.
console.log(rectangle(6, 4));
//Call the second rectangle function and pass argument 8L,4W to calculate the area of the rectangle.
console.log(rectangle1(8, 4));
