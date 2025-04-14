// Problem 5: Calculate the factorial of a number

function calculateFactorial(n) {
    // Convert input to number if it's a string
    n = parseInt(n);
    
    // Check if input is valid
    if (isNaN(n) || n < 0) {
        console.log("Invalid input. Please enter a non-negative number.");
        return;
    }
    
    let factorial = 1;
    
    // Calculate factorial
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    console.log(`Factorial of ${n} is: ${factorial}`);
}

// Example usage
const n = 5; // You can change this value to test different factorials
calculateFactorial(n); 