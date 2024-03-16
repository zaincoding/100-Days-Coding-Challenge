//Exercise 14: Guest list.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//array is create three element are tored in it.
var guests = ['Ahmed', 'jawad', 'nasir'];
//Array elements assigned to different variables by using keyword const one time.
var guest1 = guests[0], guest2 = guests[1], guest3 = guests[2];
//print each value of guest list.
console.log(guest1);
console.log(guest2);
console.log(guest3);
//Exercise 15: Replacing guest.
//New variables declared and assigned value
var absentguest = guest2, new_guest = "jameel";
//The absent guest is replaced by the new one.
guests[guests.indexOf(absentguest)] = new_guest;
//print the absent guest
console.log("\nAbsent Guest.... ".concat(absentguest));
//print that absent is replace by new one.
console.log("".concat(absentguest, ", is replaced by ").concat(new_guest, "\n"));
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("".concat(guest, ", you are invited to dinner."));
}
//Exercise 16: More Guests:
console.log('\nI found a bigger dinner table');
guests.unshift('Usman');
guests.splice(1, 0, 'Younis');
guests.push('Ali');
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log(guest);
}
//Exercise 17: Shrinking Guest list
console.log("\nI can invite only two guests for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry!: ".concat(removedGuest, ", You are no longer invited.\n"));
}
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest = guests_3[_b];
    console.log("".concat(guest, ", You are still invited."));
}
while (guests.length > 0) {
    guests.pop();
}
console.log(guests);
//Exercise 18:Seing the world.
var capital_cities = ['Islamabad', 'Istanbol', 'Moscow', 'London', 'New Yourk'];
console.log(capital_cities);
console.log(__spreadArray([], capital_cities, true).sort());
console.log(capital_cities);
console.log(__spreadArray([], capital_cities, true).sort().reverse());
console.log(capital_cities);
capital_cities.reverse();
console.log(capital_cities);
capital_cities.reverse();
console.log(capital_cities);
capital_cities.sort();
console.log(capital_cities);
capital_cities.sort().reverse();
console.log(capital_cities);
var numberGuest = guests.length;
console.log("Number of guest invited to the dinner, ".concat(numberGuest, "."));
