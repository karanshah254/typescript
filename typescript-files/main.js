"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'This is my typescript file';
console.log(message);
// Variable declaration: define variable type
var isBeginner = true;
var total = 0;
var name = 'John';
var sentence = "My name is ".concat(name, ". I am a beginner in Typescript");
console.log(sentence);
// Array type: define array of numbers
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
// enum type: define a set of named constants
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // Red = 0, Green = 1, Blue = 2
var c = Color.Green;
console.log(c);
// any type : assign value to any type
var randomValue = 10;
randomValue = true;
randomValue = "john";
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase();
