// Problem 2: Calculate the nth harmonic number

function calculateHarmonicNumber(n) {
    // Convert input to number if it's a string
    n = parseInt(n);
    
    // Check if input is valid
    if (isNaN(n) || n <= 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }
    
    let harmonicSum = 0;
    
    // Calculate harmonic number
    for (let i = 1; i <= n; i++) {
        harmonicSum += 1 / i;
    }
    
    console.log(`The ${n}th harmonic number is: ${harmonicSum.toFixed(4)}`);
}

// Example usage
const n = 5; // You can change this value to test different harmonic numbers
calculateHarmonicNumber(n); 