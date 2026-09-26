// Question 2 
let students = ["Ali", "Ahmed", "Hassan", "Ayesha", "Fatima"];

console.log("Original array:", students);

// push()
students.push("Zain");
console.log("After push:", students);

// pop()
let removedStudent = students.pop();
console.log("Removed student:", removedStudent);
console.log("After pop:", students);

// unshift()
students.unshift("Sara");
console.log("After unshift:", students);

// shift()
let firstRemovedStudent = students.shift();
console.log("Removed first student:", firstRemovedStudent);
console.log("After shift:", students);

// length
console.log("Final number of students:", students.length);