// Problem 4: Find the maximum and minimum of arithmetic operations

function findMaxMin(a, b, c) {
    // Convert inputs to numbers if they're strings
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    // Check if inputs are valid
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Invalid input. Please enter valid numbers.";
    }
    
    // Perform arithmetic operations
    const op1 = a + b * c;
    const op2 = a % b + c;
    const op3 = c + a / b;
    const op4 = a * b + c;
    
    // Find maximum and minimum
    const max = Math.max(op1, op2, op3, op4);
    const min = Math.min(op1, op2, op3, op4);
    
    // Return results
    return {
        operations: {
            "a + b * c": op1,
            "a % b + c": op2,
            "c + a / b": op3,
            "a * b + c": op4
        },
        maximum: max,
        minimum: min
    };
}

// Example usage
const a = 10;
const b = 5;
const c = 2;

const result = findMaxMin(a, b, c);
console.log("Arithmetic Operations Results:");
console.log(result.operations);
console.log(`Maximum value: ${result.maximum}`);
console.log(`Minimum value: ${result.minimum}`); 