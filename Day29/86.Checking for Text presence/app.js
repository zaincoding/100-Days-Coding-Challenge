var text = "Learning javaScript is easier the java.";
function textChecking(check) {
    var ch1 = check.includes("javaScript");
    return ch1;
}
console.log(textChecking(text));
