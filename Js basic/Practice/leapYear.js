// Problem 3: Check if a year is a leap year

function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4
    // However, if it is also divisible by 100, it must also be divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage
const year = 2024; // You can change this value to test different years

const result = isLeapYear(year);
console.log(`Is ${year} a leap year? ${result}`); 