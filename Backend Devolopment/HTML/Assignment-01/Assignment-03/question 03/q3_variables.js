// var, let and const

var studentName = "Hifza";
let age = 15;
const course = "Backend Development";

// String
// String represents text.
let city = "Karachi";

// Number
// Number represents numerical values.
let marks = 95;

// Boolean
// Boolean represents true or false.
let isStudent = true;

// Undefined
// Undefined means a variable has been declared but has no value.
let result;

// Null
// Null represents an intentionally empty value.
let emptyValue = null;

// Object
// Object stores data in key-value pairs.
let student = {
name: "Hifza",
age: 15
};

// Array
// Array stores multiple values in one variable.
let subjects = ["HTML", "CSS", "JavaScript"];

// Symbol
// Symbol creates a unique value.
let uniqueId = Symbol("id");

// BigInt
// BigInt is used for very large whole numbers.
let bigNumber = 12345678901234567890n;

// Display each variable and its value
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);

console.log("String:", city);
console.log("Number:", marks);
console.log("Boolean:", isStudent);
console.log("Undefined:", result);
console.log("Null:", emptyValue);
console.log("Object:", student);
console.log("Array:", subjects);
console.log("Symbol:", uniqueId);
console.log("BigInt:", bigNumber);

// Display/check the type using typeof
console.log("Type of Student Name:", typeof studentName);
console.log("Type of Age:", typeof age);
console.log("Type of Course:", typeof course);

console.log("Type of String:", typeof city);
console.log("Type of Number:", typeof marks);
console.log("Type of Boolean:", typeof isStudent);
console.log("Type of Undefined:", typeof result);
console.log("Type of Null:", typeof emptyValue);
console.log("Type of Object:", typeof student);
console.log("Type of Array:", typeof subjects);
console.log("Type of Symbol:", typeof uniqueId);
console.log("Type of BigInt:", typeof bigNumber);
