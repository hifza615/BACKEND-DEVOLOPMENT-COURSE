let employee = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Ahmed",
    department: "IT",
    designation: "Frontend Developer",
    salary: 60000
};

// Display first name and department using dot notation
console.log("First Name:", employee.firstName);
console.log("Department:", employee.department);

// Display designation and salary using bracket notation
console.log("Designation:", employee["designation"]);
console.log("Salary:", employee["salary"]);

// Add a new property
employee.email = "ali@example.com";

// Change an existing property
employee.salary = 70000;

// Remove a property
delete employee.lastName;

// Display the final employee object
console.log("Final Employee Record:", employee);