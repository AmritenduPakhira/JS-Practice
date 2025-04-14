// Problem 1: Convert a single digit number to its word representation

function numberToWord(num) {
    // Convert input to number if it's a string
    num = parseInt(num);
    
    // Check if input is a valid single digit
    if (isNaN(num) || num < 0 || num > 9) {
        return "Invalid input. Please enter a single digit (0-9).";
    }
    
    // Convert number to word
    if (num === 0) return "Zero";
    else if (num === 1) return "One";
    else if (num === 2) return "Two";
    else if (num === 3) return "Three";
    else if (num === 4) return "Four";
    else if (num === 5) return "Five";
    else if (num === 6) return "Six";
    else if (num === 7) return "Seven";
    else if (num === 8) return "Eight";
    else if (num === 9) return "Nine";
}

// Example usage
const number = 7; // You can change this value to test different numbers
const word = numberToWord(number);
console.log(`The number ${number} in words is: ${word}`); 