const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store employees
let employees = [];

// Show menu options
function showMenu() {
  console.log("\n===== Employee Management System =====");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee by ID");
  console.log("4. Exit");
  rl.question("Choose an option: ", handleMenu);
}

// Handle menu selection
function handleMenu(option) {
  switch (option) {
    case "1":
      addEmployee();
      break;
    case "2":
      listEmployees();
      break;
    case "3":
      removeEmployee();
      break;
    case "4":
      console.log("Exiting... Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid option. Please try again.");
      showMenu();
  }
}

// Add Employee
function addEmployee() {
  rl.question("Enter Employee ID: ", (id) => {
    rl.question("Enter Employee Name: ", (name) => {
      employees.push({ id, name });
      console.log(`Employee Added: ID=${id}, Name=${name}`);
      showMenu();
    });
  });
}

// List Employees
function listEmployees() {
  console.log("\n=== Employee List ===");
  if (employees.length === 0) {
    console.log("No employees found.");
  } else {
    employees.forEach((emp, index) => {
      console.log(`${index + 1}. ID: ${emp.id}, Name: ${emp.name}`);
    });
  }
  showMenu();
}

// Remove Employee
function removeEmployee() {
  rl.question("Enter Employee ID to remove: ", (id) => {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      console.log(`Employee Removed: ID=${employees[index].id}, Name=${employees[index].name}`);
      employees.splice(index, 1);
    } else {
      console.log("Employee not found!");
    }
    showMenu();
  });
}

// Start app
showMenu();
