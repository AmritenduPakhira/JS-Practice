// Problem 4: Find prime numbers in a range

function findPrimeNumbersInRange(start, end) {
    // Convert inputs to numbers if they're strings
    start = parseInt(start);
    end = parseInt(end);
    
    // Check if inputs are valid
    if (isNaN(start) || isNaN(end) || start > end) {
        console.log("Invalid input. Please enter valid start and end numbers.");
        return;
    }
    
    const primeNumbers = [];
    
    // Find prime numbers in range
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primeNumbers.push(num);
        }
    }
    
    console.log(`Prime numbers between ${start} and ${end} are: ${primeNumbers.join(", ")}`);
}

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Example usage
const start = 10;
const end = 50;
findPrimeNumbersInRange(start, end); 