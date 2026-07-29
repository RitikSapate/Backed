// Variables
const name = "Ritik";
let age = 22;

// Function
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Array
const skills = ["Java", "DSA", "JavaScript"];

// Object
const student = {
    name: name,
    age: age,
    skills: skills
};

// Loop
console.log("Skills:");
for (let skill of skills) {
    console.log("- " + skill);
}

// Condition
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Function call
console.log(greet(student.name));