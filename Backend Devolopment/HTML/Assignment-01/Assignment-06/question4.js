// Question 4 

let numbers = [10, 20, 30, 40, 50];
let name = "Hifza";
let age = 15;

// Array.isArray()
console.log("Is numbers an array?", Array.isArray(numbers));
console.log("Is name an array?", Array.isArray(name));
console.log("Is age an array?", Array.isArray(age));

// Arrow function
let showArray = (array) => {
    console.log("Array:", array);
};

// Calling 
showArray(numbers);

// Another arrow function
let showValue = (value) => {
    console.log("Value:", value);
};

showValue("Hello JavaScript");