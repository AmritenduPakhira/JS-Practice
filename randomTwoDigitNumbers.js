// Problem 4: Generate 5 random 2-digit numbers and find their sum and average
let sum = 0;
const numbers = [];

// Generate 5 random 2-digit numbers
for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 90) + 10; // Generates number between 10 and 99
    numbers.push(num);
    sum += num;
}

const average = sum / 5;

console.log("Random 2-digit numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average); 