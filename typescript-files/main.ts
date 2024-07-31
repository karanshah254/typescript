export { };
let message = 'This is my typescript file';
console.log(message);


// Variable declaration: define variable type
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'John';
let sentence: string = `My name is ${name}. I am a beginner in Typescript`;
console.log(sentence);


// Array type: define array of numbers
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let person1: [string, number] = ['Chris', 22];


// enum type: define a set of named constants
enum Color { Red, Green, Blue }; // Red = 0, Green = 1, Blue = 2
let c: Color = Color.Green;
console.log(c);


// any type : assign value to any type
let randomValue: any = 10;
randomValue = true;
randomValue = "john";


let myVariable: any = 10;
function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
(myVariable as string).toUpperCase();


