// First employee object
let employee1 = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Ahmed",
    department: "IT",
    designation: "Frontend Developer",
    salary: 70000,

    // Method to return complete name
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    // Method to return employee details
    getDetails: function() {
        return "Employee ID: " + this.employeeId +
            ", Department: " + this.department;
    }
};

// Call both methods
console.log("Complete Name:", employee1.getFullName());
console.log("Employee Details:", employee1.getDetails());


// Second employee object
let employee2 = {
    employeeId: 102,
    firstName: "Sara",
    lastName: "Khan",
    department: "HR",
    designation: "HR Manager",
    salary: 80000,

    // Method to return complete name
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    // Method to return employee details
    getDetails: function() {
        return "Employee ID: " + this.employeeId +
            ", Department: " + this.department;
    }
};

// Call both methods for the second employee
console.log("Complete Name:", employee2.getFullName());
console.log("Employee Details:", employee2.getDetails());