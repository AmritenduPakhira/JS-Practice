// Problem 2: Display the weekday based on a number using switch

function getWeekdaySwitch(num) {
    // Convert input to number if it's a string
    num = parseInt(num);
    
    // Check if input is valid
    if (isNaN(num) || num < 1 || num > 7) {
        return "Invalid input. Please enter a number between 1 and 7.";
    }
    
    // Convert number to weekday using switch
    switch (num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid input";
    }
}

// Example usage
const dayNumber = 3; // You can change this value to test different days
const weekday = getWeekdaySwitch(dayNumber);
console.log(`Day ${dayNumber} of the week is: ${weekday}`); 