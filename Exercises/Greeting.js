var currentTime = new Date();
var currentHour = currentTime.getHours();
var greeting;

if (currentHour < 12) {
    greeting = "Good Morning"
} else if (currentHour < 18) {
    greeting = "Good afternoon"
} else {
    greeting = "Good evening"
}

console.log(greeting);