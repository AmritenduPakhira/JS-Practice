// Problem 3: Display the place value of a number using switch

function getPlaceValueSwitch(num) {
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
    
    // Determine place value based on number of digits using switch
    switch (digitCount) {
        case 1:
            return "Unit";
        case 2:
            return "Ten";
        case 3:
            return "Hundred";
        case 4:
            return "Thousand";
        case 5:
            return "Ten Thousand";
        case 6:
            return "Hundred Thousand";
        case 7:
            return "Million";
        default:
            return "Number too large";
    }
}

// Example usage
const number = 1000; // You can change this value to test different numbers
const placeValue = getPlaceValueSwitch(number);
console.log(`The place value of ${number} is: ${placeValue}`); 