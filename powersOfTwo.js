// Problem 1: Print powers of 2 up to 2^n

function printPowersOfTwo(n) {
    // Convert input to number if it's a string
    n = parseInt(n);
    
    // Check if input is valid
    if (isNaN(n) || n < 0) {
        console.log("Invalid input. Please enter a non-negative number.");
        return;
    }
    
    console.log(`Powers of 2 up to 2^${n}:`);
    
    // Print powers of 2
    for (let i = 0; i <= n; i++) {
        const power = Math.pow(2, i);
        console.log(`2^${i} = ${power}`);
    }
}

// Example usage
const n = 8; // You can change this value to test different powers
printPowersOfTwo(n); 