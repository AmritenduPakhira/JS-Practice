// Problem 1: Temperature conversion

function convertTemperature(value, fromUnit, toUnit) {
    // Convert value to number if it's a string
    value = parseFloat(value);
    
    // Check if value is valid
    if (isNaN(value)) {
        return "Invalid input. Please enter a valid number.";
    }
    
    // Check if units are valid
    if ((fromUnit !== "C" && fromUnit !== "F") || (toUnit !== "C" && toUnit !== "F")) {
        return "Invalid units. Please use 'C' for Celsius or 'F' for Fahrenheit.";
    }
    
    // Check if temperature is within freezing and boiling points
    if (fromUnit === "C" && (value < 0 || value > 100)) {
        return "Temperature must be between 0°C and 100°C.";
    }
    
    if (fromUnit === "F" && (value < 32 || value > 212)) {
        return "Temperature must be between 32°F and 212°F.";
    }
    
    // Perform conversion
    let result;
    if (fromUnit === "C" && toUnit === "F") {
        result = (value * 9/5) + 32;
        return `${value}°C = ${result.toFixed(2)}°F`;
    } else if (fromUnit === "F" && toUnit === "C") {
        result = (value - 32) * 5/9;
        return `${value}°F = ${result.toFixed(2)}°C`;
    } else {
        return `${value}°${fromUnit} = ${value}°${toUnit}`;
    }
}

// Example usage
const value = 37;
const fromUnit = "C";
const toUnit = "F";

const result = convertTemperature(value, fromUnit, toUnit);
console.log(result); 