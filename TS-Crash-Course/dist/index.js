"use strict";
// Tuples
let person = [1, "hello", true];
// Union: When a variable can be multiple types. 
let id = 1234;
id = "C-104";
// Enum: A set of named constants.
var Direction1;
(function (Direction1) {
    // By default have values of 0,1,2, etc. 
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = -1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = -2] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
