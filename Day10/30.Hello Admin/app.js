var users_name = ['ahmed', 'ali', 'anwar', 'zahid', 'admin'];
for (var i = 0; i < users_name.length; i++) {
    if (users_name[i] === 'admin') {
        console.log("Hello ".concat(users_name[i], ", would you like to see a status report?"));
    }
    else {
        console.log("welcome to sign in, ".concat(users_name[i]));
    }
}
