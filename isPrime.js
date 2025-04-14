// Problem 3: Check if a number is prime

function isPrime(num) {
    // Convert input to number if it's a string
    num = parseInt(num);
    
    // Check if input is valid
    if (isNaN(num) || num <= 1) {
        return false;
    }
    
    // Check if number is prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Example usage
const num = 17; // You can change this value to test different numbers
const result = isPrime(num);
console.log(`Is ${num} a prime number? ${result}`); 