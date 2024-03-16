var Ordinals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < Ordinals.length; i++) {
    if (Ordinals[i] === 1) {
        console.log("".concat(Ordinals[i], "st"));
    }
    else if (Ordinals[i] === 2) {
        console.log("".concat(Ordinals[i], "nd"));
    }
    else if (Ordinals[i] === 3) {
        console.log("".concat(Ordinals[i], "rd"));
    }
    else {
        console.log("".concat(Ordinals[i], "th"));
    }
}
