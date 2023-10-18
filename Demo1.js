"use strict";

var firstName;
var lastName;

// assign a value "Lawrence" to the variable labeled firstName
firstName = "Lawrence";
// firstName has the value of "Lawrence"

// assign a value of "Tejeda" to the variable labeled lastName
lastName = "Tejeda";
// lastName now has the value of "Tejeda"

var fullName;

// assign to the variable fullName the result of the expression "lastName + ", " + firstName".
// that expression will concatenate the value of lastName, with the literal value "," , followed by the value of firstName.
fullName = lastName + ", " + firstName;
// the value of fullName is now: "Tejeda, Lawrence"


var message;

message = "The user's full name is: " + fullName;

console.log(message);
console.log(firstName);
console.log(lastName);
console.log(fullName);