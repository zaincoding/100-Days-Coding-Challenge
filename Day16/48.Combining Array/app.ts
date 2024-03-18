// inilize an array of laptop prices
const laptop_prices: number[] = [8000, 16000, 24000, 32000];
// initialize another arry of laptop prices.
const laptop_prices2: number[] = [6000, 12000, 18000, 24000];
// Combine the arrays using the spread operator
const combineArray: number[] = [...laptop_prices, ...laptop_prices2];

// Sort the combined array in ascending order
combineArray.sort((a, b) => a - b);
// Log the sorted array to the console
console.log(combineArray);
