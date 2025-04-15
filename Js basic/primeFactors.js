// Problem 6: Find the factors of a number using prime factorization

function findPrimeFactors(n) {
    // Convert input to number if it's a string
    n = parseInt(n);
    
    // Check if input is valid
    if (isNaN(n) || n <= 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }
    
    const factors = [];
    let num = n;
    
    // Find prime factors
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    
    console.log(`Prime factors of ${n} are: ${factors.join(" × ")}`);
}

// Example usage
const n = 84; // You can change this value to test different numbers
findPrimeFactors(n); 