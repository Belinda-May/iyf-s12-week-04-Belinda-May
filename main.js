// WEEK 4 - JAVASCRIPT FUNDAMENTALS
// Lesson 7: Variables and Data Types

// 1. Variables
const myName = "Belinda";
let myAge = 27;
const myCountry = "Kenya";
const isLearningJavaScript = true;

// 2. Display information
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("My country is:", myCountry);
console.log("Am I learning JavaScript?", isLearningJavaScript);

// 3. Check data types
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof myCountry);
console.log(typeof isLearningJavaScript);

// =================================
// LESSON 7.2 - NUMBER OPERATIONS
// =================================

const a = 10;
const b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);

// Increment and decrement

let count = 0;

count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);
// String operations

const firstName = "Belinda";
const lastName = "Omondi";

// Joining two strings
const fullName = firstName + " " + lastName;

// Template literals
const greeting = `Hello, ${firstName}!`;

const message = `${firstName} has ${firstName.length} letters.`;

console.log(fullName);
console.log(greeting);
console.log(message);

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Belinda"));
// Comparison operators

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 !== 3);

// Logical operators

console.log(true && true);
console.log(true || false);
console.log(!true);
// Age calculations

const birthYear = 1999;

const ageInDays = myAge * 365;
const ageInHours = ageInDays * 24;
const yearTurning100 = birthYear + 100;

console.log(`My approximate age in days: ${ageInDays}`);
console.log(`My approximate age in hours: ${ageInHours}`);
console.log(`I will turn 100 in: ${yearTurning100}`);
// Favourite colours and today's date

const favoriteColors = ["black", "purple", "blue"];
const today = new Date();

console.log("My favourite colours:", favoriteColors);
console.log("Today's date:", today);
