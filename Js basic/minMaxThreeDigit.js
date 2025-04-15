// Problem 1: Find minimum and maximum from 5 random 3-digit numbers
const numbers = [];

// Generate 5 random 3-digit numbers
for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * 900) + 100; // Generates number between 100 and 999
    numbers.push(num);
}

// Find minimum and maximum
let min = numbers[0];
let max = numbers[0];

for (let num of numbers) {
    if (num < min) min = num;
    if (num > max) max = num;
}

console.log("Random 3-digit numbers:", numbers);
console.log("Minimum value:", min);
console.log("Maximum value:", max); 