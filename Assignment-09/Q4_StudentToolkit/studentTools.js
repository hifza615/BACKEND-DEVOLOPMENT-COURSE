
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getTotalMarks(mark1, mark2, mark3, mark4) {
    return mark1 + mark2 + mark3 + mark4;
}

// Named Export
export { getTotalMarks };

// Default Export
export default getFullName;
