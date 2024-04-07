var dice = Math.floor(Math.random() * 6) + 1;
if (dice > 5) {
    console.log(dice + ": You meet the condition.");
}
else {
    console.log("".concat(dice, ": The condition is not met.\n Try again."));
}
