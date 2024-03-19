function rest_parameter() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("My hobbies are...");
    args.forEach(function (arg) {
        console.log("I enjoy a, " + arg);
    });
}
//const hobbies = 
rest_parameter('Cycling', 'Hiking', 'Video Gamning', 'Coding');
//console.log(hobbies);
