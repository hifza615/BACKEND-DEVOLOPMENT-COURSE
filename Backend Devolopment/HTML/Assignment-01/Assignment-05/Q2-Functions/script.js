// Function without parameters
function greet() {
    console.log("Welcome to JavaScript!");
}

// Function with one parameter
function greetUser(name) {
    console.log("Welcome, " + name + "!");
}

// Function with two parameters
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Calling the functions
greet();

greetUser("hifza");

let result = addNumbers(10, 20);
console.log("Sum:", result);