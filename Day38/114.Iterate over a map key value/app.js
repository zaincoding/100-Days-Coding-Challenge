var studentInfo = new Map();
studentInfo.set('Name', 'Ahmed');
studentInfo.set('ID', 'Ahmed_123@gmail.com');
studentInfo.forEach(function (value, key) {
    console.log("".concat(key, ": ").concat(value));
});
