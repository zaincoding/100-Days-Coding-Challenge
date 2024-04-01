var subStr = "This code return the first occurence of the code.";
function findPosition(substr) {
    var str = substr.indexOf('code');
    return str;
}
console.log(findPosition(subStr));
