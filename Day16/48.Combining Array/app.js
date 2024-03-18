var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop_prices = [8000, 16000, 24000, 32000];
var laptop_prices2 = [6000, 12000, 18000, 24000];
var combineArray = __spreadArray(__spreadArray([], laptop_prices, true), laptop_prices2, true);
console.log(combineArray);
combineArray.sort(function (a, b) { return a - b; });
console.log(combineArray);
