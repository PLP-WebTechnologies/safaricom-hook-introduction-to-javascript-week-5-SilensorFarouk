// Part 1: JavaScript Basics

// Function for Simple Calculator
function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`Result: ${result}`);
}

// Function for Greeting User
function greetUser(name) {
    return `Hello, ${name}! Welcome to the site.`;
}

// Part 2: JavaScript Control Structures

// If Statements - Voting Eligibility
function checkVotingEligibility() {
    let age = parseInt(prompt("Enter your age:"));
    if (age >= 18) {
        document.getElementById("dynamic-content").innerHTML = "You are eligible to vote!";
    } else {
        document.getElementById("dynamic-content").innerHTML = "You are not eligible to vote.";
    }
}

// Loops - Display Numbers from 1 to 10
function displayNumbers() {
    let ol = document.createElement("ol");
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.textContent = i;
        ol.appendChild(li);
    }
    document.body.appendChild(ol);
}

// Part 3: Introduction to the DOM

// Modifying DOM Content on Load
window.onload = function () {
    // Modify the <h1> element
    document.querySelector('h1').textContent = "JavaScript in Action!";

    // Add new <p> inside dynamic-content <div>
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This content was added dynamically using JavaScript.";
    document.getElementById("dynamic-content").appendChild(newParagraph);
}
