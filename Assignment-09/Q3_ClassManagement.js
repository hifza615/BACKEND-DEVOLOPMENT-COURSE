
const groupA = ["Ali", "Ahmed", "Hamza"];
const groupB = ["Sara", "Ayesha", "Laiba"];

const profile = {
    name: "Laiba",
    className: "Web Development",
    city: "Karachi"
};


const combinedClass = [...groupA, ...groupB];

const copiedGroupA = [...groupA];
copiedGroupA.push("Usman");


const updatedProfile = {
    ...profile,
    city: "Lahore"
};

const profileWithEmail = {
    ...profile,
    email: "ali@example.com"
};

console.log("Original Group A:", groupA);
console.log("Copied Group A:", copiedGroupA);
console.log("Original Group B:", groupB);
console.log("Combined Class:", combinedClass);

console.log("Original Profile:", profile);
console.log("Updated Profile:", updatedProfile);
console.log("Profile With Email:", profileWithEmail);
