
// Arithmetic operator

var a = 11;
var b = 8;

console.log(a + b); // addition
console.log(a - b); // Subraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus

console.log(a)
console.log(a++) // increment - pre-increment Actual value is 7, Output: 6 
console.log(a)  // Output: 7
console.log(++a)  // increment - post-increment Actual value is 8, Output: 8 
console.log(a)    //Output: 8

console.log(b)
console.log(b--) // decrement - pre-decrement Actual value is 4, Output: 5 
console.log(b)  // Output: 5
console.log(--b)  // decrement - post-decrement Actual value is 3, Output: 3
console.log(b)    //Output: 3


// Assigment operator
var c = 12;
console.log(c += 4)

console.log(c -= 4)

console.log(c *= 4)

console.log(c /= 4)

console.log(c %= 4)


// Comparison Operators

var d = 3;
var e = d;

console.log(a == b) //  == equal to 
console.log(a != b) //  != not equal to
console.log(a > b) //  > greater than
console.log(a < b) //  < less than
console.log(a >= b) //  >= greater than equal to 
console.log(a <= b) //  <= less than equal to
console.log(a > b ? "True, printing this" : "False, printing this")//  ?: ternary Operator
console.log(e === d)   //  === equal value and equal type
console.log(e !== d) //  !== not equal value and not equal type 


//Logical Operators

var e = 6;
var f = 8;

//  LOGICAL AND &&
console.log(e > 5 && f > 5) //  Output: true
console.log(true && true)   //  Output: true
console.log(false && true)  //  Output: false
console.log(false && false) //  Output: false

//  LOGICAL OR ||
console.log(e > 5 || f > 5) //  Output: true
console.log(true || true)   //  Output: true
console.log(false || true)  //  Output: true
console.log(true || false)  //  Output: true
console.log(false || false) //  Output: false

// LOGICAL NOT ! 
console.log(!true)   // LOGICAL NOT !  Output: false
console.log(!false)   // LOGICAL NOT !  Output: true