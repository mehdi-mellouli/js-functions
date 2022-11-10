var yourAge = prompt("what is your age?");


function lifeInWeeks (yourAge) {
var leftYears = 90 - yourAge;
const months = leftYears * 12;
const weeks = leftYears * 52;
const days = leftYears * 365;
}
alert ("you have " + days + " days, " + weeks + " weeks and " + months + " months left until you reach 90 years old!");
lifeInWeeks (yourAge);