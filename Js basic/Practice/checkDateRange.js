// Problem 2: Check if date is between March 20 and June 20

// Function to check if date is in range
function isDateInRange(day, month) {
    // Convert month to number if it's a string
    month = parseInt(month);
    day = parseInt(day);
    
    // Check if date is valid
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return "Invalid date";
    }
    
    // Check if date is between March 20 and June 20
    if ((month === 3 && day >= 20) || 
        (month > 3 && month < 6) || 
        (month === 6 && day <= 20)) {
        return true;
    }
    
    return false;
}

// Example usage
const day = 15;  // You can change these values
const month = 4; // to test different dates

const result = isDateInRange(day, month);
console.log(`Is ${month}/${day} between March 20 and June 20? ${result}`); 