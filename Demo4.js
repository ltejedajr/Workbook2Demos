"use strict";


var somevalue = 4;
var anothervalue;

// ++ is called a post increment operator and adds an increment by 1
// -- is called a decrement operator and subtracts and increment by 1
somevalue++;
anothervalue = somevalue++;
anothervalue = ++somevalue;
somevalue--;

console.log(anothervalue);
console.log(somevalue);
