

// Establish the starting values that we "know".
var savingsAmount = 12000;
var InterestRateInPercentageWhole = 5;


// Calculate any values that don't
// already know, but that we can figure out.

var howManyYearsToDouble = 72 / InterestRateInPercentageWhole;
var endingSavingsAmount = savingsAmount * 2;



// Display the results
var message = "Message here"
var message2 = "A savings of " + savingsAmount + " would become " + endingSavingsAmount;

console.log(message2);