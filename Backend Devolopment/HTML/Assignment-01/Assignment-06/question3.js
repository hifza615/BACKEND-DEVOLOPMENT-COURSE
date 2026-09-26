// Question 3 

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let vegetables = ["Carrot", "Potato", "Tomato"];

// concat()
let combined = fruits.concat(vegetables);
console.log("Combined array:", combined);

// slice
let selectedFruits = fruits.slice(1, 4);
console.log("Sliced array:", selectedFruits);

// splice
fruits.splice(2, 1);
console.log("After removing with splice:", fruits);

// splice 
fruits.splice(2, 0, "Mango");
console.log("After adding with splice:", fruits);

// delete
delete fruits[1];

console.log("After delete:", fruits);
console.log("Length after delete:", fruits.length);
console.log("Deleted position:", fruits[1]);