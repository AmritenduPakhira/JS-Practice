// Problem 2: Display the weekday based on a number

function getWeekday(num) {
    // Convert input to number if it's a string
    num = parseInt(num);
    
    // Check if input is valid
    if (isNaN(num) || num < 1 || num > 7) {
        return "Invalid input. Please enter a number between 1 and 7.";
    }
    
    // Convert number to weekday
    if (num === 1) return "Sunday";
    else if (num === 2) return "Monday";
    else if (num === 3) return "Tuesday";
    else if (num === 4) return "Wednesday";
    else if (num === 5) return "Thursday";
    else if (num === 6) return "Friday";
    else if (num === 7) return "Saturday";
}

// Example usage
const dayNumber = 3; // You can change this value to test different days
const weekday = getWeekday(dayNumber);
console.log(`Day ${dayNumber} of the week is: ${weekday}`); 