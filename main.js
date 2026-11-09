
// WEEK 4 - JAVASCRIPT FUNDAMENTALS
// LESSON 7.1 - VARIABLES AND DATA TYPES

const myName = "Belinda";
let myAge = 27;
const myCountry = "Kenya";
const isLearningJavaScript = true;

console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("My country is:", myCountry);
console.log("Am I learning JavaScript?", isLearningJavaScript);

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
const fullName = firstName + " " + lastName;
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

// =================================
// LESSON 7.3 - FUNCTIONS
// =================================

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with condition
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Test functions
console.log(greet("Belinda"));
console.log(add(10, 5));
console.log(multiply(4, 5));
console.log(divide(20, 4));
console.log(divide(20, 0));

// Exercise 2 - Build these functions

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const isEven = (number) => {
    return number % 2 === 0;
};

function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(name => name[0].toUpperCase())
        .join("");
}

const reverseString = (str) => {
    return str.split("").reverse().join("");
};

// Test the functions
console.log("Area:", calculateArea(10, 5));
console.log("Temperature:", celsiusToFahrenheit(25));
console.log("Is 8 even?", isEven(8));
console.log("My initials:", getInitials("Belinda Omondi"));
console.log("Reversed:", reverseString("JavaScript"));

// Exercise 3 - Default parameters
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log("Default tip:", calculateTip(1000));
console.log("20% tip:", calculateTip(1000, 20));

// =================================
// LESSON 7.4 - CONTROL FLOW
// =================================

// If / else - Grade calculator
function getGrade(score) {
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Grade for 85:", getGrade(85));
console.log("Grade for 72:", getGrade(72));
console.log("Grade for 45:", getGrade(45));

// Switch - Day of the week
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day number";
    }
}

console.log("Day 0:", getDayName(0));
console.log("Day 3:", getDayName(3));
console.log("Day 6:", getDayName(6));
console.log("Day 8:", getDayName(8));

// Loops

// A. Print numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// B. Print even numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// C. FizzBuzz - numbers 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// D. Print a triangle of stars
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// E. While loop - count from 1 to 5
let whileCount = 1;

while (whileCount <= 5) {
    console.log(whileCount);
    whileCount++;
}

// F. For...of loop
const colors = ["Black", "Purple", "Blue"];

for (const color of colors) {
    console.log(color);
}

// =================================
// LESSON 8.1 - ARRAYS
// =================================

// Create and access an array
const fruits = ["Mango", "Apple", "Banana", "Orange"];

console.log("My fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);

// Modify, add and remove items
fruits[1] = "Pineapple";
fruits.push("Watermelon");
fruits.pop();

console.log("Updated fruits:", fruits);

// Array methods
const numbers = [5, -3, 12, 8, -1, 20, 4];

// forEach
numbers.forEach(number => console.log("Number:", number));

// map
const doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled:", doubledNumbers);

// filter
const positiveNumbers = numbers.filter(number => number >= 0);
console.log("Non-negative:", positiveNumbers);

// find
const firstGreaterThan10 = numbers.find(number => number > 10);
console.log("First number above 10:", firstGreaterThan10);

// reduce
const product = numbers.reduce((total, number) => total * number, 1);
console.log("Product:", product);

// includes
console.log("Includes 12:", numbers.includes(12));

 // =================================
 // LESSON 8.2 - OBJECTS
 // =================================

// 1. Create an object
const person = {
    name: "Belinda",
    age: 27,
    country: "Kenya",
    isLearningJavaScript: true
};

// 2. Access object properties
console.log("Name:", person.name);
console.log("Age:", person.age);

// Bracket notation
console.log("Country:", person["country"]);

// 3. Nested objects
const student = {
    name: "Belinda",
    course: "JavaScript",
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log("Student:", student.name);
console.log("City:", student.address.city);

// 4. Modify object properties
person.age = 28;
person.email = "belinda@example.com";

console.log("Updated person:", person);

// 5. Delete a property
delete person.isLearningJavaScript;

console.log("After deleting property:", person);

// 6. Object methods
const car = {
    brand: "Toyota",
    model: "Vitz",
    year: 2020,

    getDescription: function() {
        return `${this.brand} ${this.model}, ${this.year}`;
    }
};

console.log("Car:", car.getDescription());

// 7. Object.keys(), Object.values(), Object.entries()
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// 8. Loop through an object
for (const key in person) {
    console.log(key + ":", person[key]);
}

 // =================================
 // LESSON 8.3 - ARRAYS OF OBJECTS
 // =================================

const students = [
    { name: "Alice", age: 20, grade: 90, major: "Computer Science" },
    { name: "Bob", age: 22, grade: 75, major: "Business" },
    { name: "Charlie", age: 21, grade: 60, major: "Computer Science" },
    { name: "Diana", age: 23, grade: 95, major: "Mathematics" }
];

// 1. Get student names using map
const studentNames = students.map(student => student.name);
console.log("Student names:", studentNames);

// 2. Filter students with grades above 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High achievers:", highAchievers);

// 3. Find Charlie
const charlie = students.find(student => student.name === "Charlie");
console.log("Charlie:", charlie);

// 4. Calculate average grade using reduce
const averageGrade = students.reduce((total, student) => {
    return total + student.grade;
}, 0) / students.length;

console.log("Average grade:", averageGrade);

// 5. Filter Computer Science students
const computerScienceStudents = students.filter(
    student => student.major === "Computer Science"
);
console.log("Computer Science students:", computerScienceStudents);

// 6. Sort students by highest grade
const sortedStudents = [...students].sort(
    (a, b) => b.grade - a.grade
);
console.log("Sorted by grade:", sortedStudents);

// 7. Check if some students scored above 90
console.log("Some students scored above 90:",
    students.some(student => student.grade > 90)
);

// 8. Check if every student passed
console.log("Every student passed:",
    students.every(student => student.grade >= 60)
);

 // =================================
 // LESSON 8.4 - JSON
 // =================================

// 1. Convert JSON text into a JavaScript object
const userJson = '{"name":"Belinda","age":27,"country":"Kenya"}';

const userObject = JSON.parse(userJson);
console.log("Parsed user:", userObject);

// 2. Convert a JavaScript object into JSON text
const userString = JSON.stringify(userObject);
console.log("Stringified user:", userString);

// 3. Work with a JSON array of posts
const postsJson = `[
    {"title":"JavaScript Basics","likes":25,"published":true},
    {"title":"Learning Arrays","likes":50,"published":false},
    {"title":"Understanding Objects","likes":40,"published":true},
    {"title":"Working with JSON","likes":80,"published":true}
]`;

const posts = JSON.parse(postsJson);

// Filter published posts
const publishedPosts = posts.filter(post => post.published);

// Sort by likes, highest first
const popularPosts = [...publishedPosts].sort(
    (a, b) => b.likes - a.likes
);

// Format post information
const formattedPosts = popularPosts.map(
    post => `${post.title} - ${post.likes} likes`
);

console.log("Published posts:", publishedPosts);
console.log("Popular posts:", popularPosts);
console.log("Formatted posts:", formattedPosts);

// Convert filtered posts back to JSON
const publishedJson = JSON.stringify(publishedPosts, null, 2);
console.log("Published posts JSON:", publishedJson);

// 4. Handle invalid JSON safely
try {
    const invalidJson = '{"name": "Belinda", age: 27}';
    const result = JSON.parse(invalidJson);
    console.log(result);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}
