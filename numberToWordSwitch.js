// Problem 1: Convert a single digit number to its word representation using switch

function numberToWordSwitch(num) {
    // Convert input to number if it's a string
    num = parseInt(num);
    
    // Check if input is a valid single digit
    if (isNaN(num) || num < 0 || num > 9) {
        return "Invalid input. Please enter a single digit (0-9).";
    }
    
    // Convert number to word using switch
    switch (num) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return "Invalid input";
    }
}

// Example usage
const number = 7; // You can change this value to test different numbers
const word = numberToWordSwitch(number);
console.log(`The number ${number} in words is: ${word}`); 