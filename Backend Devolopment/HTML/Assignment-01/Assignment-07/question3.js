let marks = [78, 45, 92, 66, 88, 54, 91, 73];

// Create a second array of marks
let secondMarks = [81, 69, 95];

// Combine both arrays
let combinedMarks = marks.concat(secondMarks);
console.log("Combined Marks:", combinedMarks);

// Create a smaller list using slice
let selectedMarks = combinedMarks.slice(1, 5);
console.log("Selected Marks:", selectedMarks);

// Change one mark in the middle of the combined list
combinedMarks.splice(4, 1, 80);
console.log("After Changing a Mark:", combinedMarks);

// Display the total number of marks
console.log("Total Number of Marks:", combinedMarks.length);

// Arrange marks from lowest to highest
let sortedMarks = combinedMarks.slice().sort((a, b) => a - b);
console.log("Ascending Marks:", sortedMarks);

// Reverse the sorted list
let reversedMarks = sortedMarks.slice().reverse();
console.log("Reversed Marks:", reversedMarks);

// Arrow function to display the final result
let displayResult = (marksArray) => {
    console.log("Final Result:", marksArray);
};

// Call the arrow function
displayResult(reversedMarks);