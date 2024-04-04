var currentDate = new Date();
var birthDate = new Date('2000-6-6');
var theYear = currentDate.getFullYear();
console.log(theYear);
var birthDay = new Date(theYear, birthDate.getMonth(), birthDate.getDay());
if (birthDay.getTime() <= currentDate.getTime()) {
    birthDate.setFullYear(theYear + 1);
}
console.log(birthDay);
