// WEEK 4 - CALCULATOR PROJECT

// 1. Addition
function add(num1, num2) {
    return num1 + num2;
}

// 2. Subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// 3. Multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// 4. Division
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero";
    }

    return num1 / num2;
}

// 5. Main calculator function
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator";
    }
}

// 6. Test the calculator
console.log("Addition:", calculate(10, "+", 5));
console.log("Subtraction:", calculate(10, "-", 5));
console.log("Multiplication:", calculate(10, "*", 5));
console.log("Division:", calculate(10, "/", 5));
console.log("Remainder:", calculate(10, "%", 3));
console.log("Power:", calculate(2, "**", 3));
console.log("Division by zero:", calculate(10, "/", 0));
console.log("Invalid operator:", calculate(10, "x", 5));
