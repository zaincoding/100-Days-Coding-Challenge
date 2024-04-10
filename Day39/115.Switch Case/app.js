var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday.";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
    case 5:
        day = 'Friday';
    case 6:
        day = 'Saturday';
    default:
        day = "Try again";
        break;
}
console.log(day);
