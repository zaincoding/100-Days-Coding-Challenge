var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var capital_cities = ['Islamabad', 'Istanbol', 'Moscow', 'London', 'New Yourk'];
//print array in original form.
console.log(capital_cities);
//print array in alphabetical order without modifying the original one.
console.log(__spreadArray([], capital_cities, true).sort());
//print original array.
console.log(capital_cities);
//print the array in reverse alphabitical order without modifying the original one.
console.log(__spreadArray([], capital_cities, true).sort().reverse());
//print the original one.
console.log(capital_cities);
console.log("change the original list in reverse order");
console.log(capital_cities.reverse());
//print to show that the original order list changed.
console.log(capital_cities);
console.log("reverse the order list again to show that it come back to it's original form.");
console.log(capital_cities.reverse());
//sort the array in alphabitical order
console.log(capital_cities.sort());
//sort the array in reverse alphabitical order.
console.log(capital_cities.sort().reverse());
//console.log(capital_cities);
