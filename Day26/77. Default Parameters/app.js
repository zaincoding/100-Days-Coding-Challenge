function greetUser(user, greet) {
    if (user === void 0) { user = 'Jhon'; }
    if (greet === void 0) { greet = 'Hello'; }
    return "".concat(greet, ",  ").concat(user);
}
var userName = 'Tahir';
console.log(greetUser(userName));
console.log(greetUser());
