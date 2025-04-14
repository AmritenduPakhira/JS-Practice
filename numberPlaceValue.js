// Problem 3: Display the place value of a number

function getPlaceValue(num) {
    // Convert input to number if it's a string
    num = parseInt(num);
    
    // Check if input is valid
    if (isNaN(num) || num <= 0) {
        return "Invalid input. Please enter a positive number.";
    }
    
    // Count the number of digits
    let digitCount = 0;
    let tempNum = num;
    while (tempNum > 0) {
        digitCount++;
        tempNum = Math.floor(tempNum / 10);
    }
    
    // Determine place value based on number of digits
    if (digitCount === 1) return "Unit";
    else if (digitCount === 2) return "Ten";
    else if (digitCount === 3) return "Hundred";
    else if (digitCount === 4) return "Thousand";
    else if (digitCount === 5) return "Ten Thousand";
    else if (digitCount === 6) return "Hundred Thousand";
    else if (digitCount === 7) return "Million";
    else return "Number too large";
}

// Example usage
const number = 1000; // You can change this value to test different numbers
const placeValue = getPlaceValue(number);
console.log(`The place value of ${number} is: ${placeValue}`); 