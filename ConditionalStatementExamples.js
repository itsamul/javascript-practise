var a = 19;
var b = 10;

console.log("If...  example")
if (a >= b) {
    console.log("a is greater than b."); // since the condition is true this statement will be printed.
}
if (a <= b) {
    console.log("a is greater than b.");    // since the condition is false the statement will not be printed.
}

console.log("If...else...  example 1")

if (a >= b) {
    console.log("a is greater than b."); // since the condition is true this statement will be printed.
} else {
    console.log("b is greater than a.");    // since the condition is false the statement will not be printed.
}

console.log("If...else...  example 2")

if (a <= b) {
    console.log("a is greater than b."); // since the condition is false this statement will be not printed.
} else {
    console.log("b is greater than a.");    // since the condition is true the statement will be printed.
}


console.log("If...else if...else...  Example 1")

var c = 22;

a = 3, b = 4, c = 1;
if (a > b && a > c) {
    console.log("a is greater.")
} else if (b > a && b > c) {
    console.log("b is greater.")
} else {
    console.log("c is greater.")
}



console.log("Switch Example")

var month = 1
;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Enter correct month number.");

}