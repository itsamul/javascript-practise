// Write a program that calculates the ticket price based on age.

var age = 20;

var ticketPrice = 0;

if( age < 5){
    ticketPrice = 0;
} else if( age > 12 && age < 18){
    ticketPrice = 20;
} else {
    ticketPrice = 40;
}

console.log("Ticket Price is : " + ticketPrice)