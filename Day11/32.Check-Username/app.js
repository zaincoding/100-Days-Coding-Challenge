//Array of current user initialized
var current_users = ['Javed', 'Amir', 'Nooman', 'zafar', 'Iqbal'];
//Array of new users to check.
var new_users = ['javed', 'Danish', 'Anwar', 'Zafar', 'Liaqat'];
var _loop_1 = function (i) {
    //check if the new user exist in the current user array also igonre case.
    if (current_users.some(function (users) { return users.toLowerCase() === new_users[i].toLowerCase(); })) {
        //username already taken.
        console.log("The Name ".concat(new_users[i], ", is already taken."));
    }
    else {
        //print username that's avaliable.
        console.log("The Name ".concat(new_users[i], ", is avaliable."));
    }
};
//loop through each new user to check it's avalibality.
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
