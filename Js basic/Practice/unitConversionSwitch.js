// Problem 4: Unit Conversion using switch

function convertUnit(value, fromUnit, toUnit) {
    // Convert value to number if it's a string
    value = parseFloat(value);
    
    // Check if value is valid
    if (isNaN(value)) {
        return "Invalid input. Please enter a valid number.";
    }
    
    // Determine conversion type
    let conversionType;
    if ((fromUnit === "feet" && toUnit === "inch") || 
        (fromUnit === "inch" && toUnit === "feet")) {
        conversionType = "feet-inch";
    } else if ((fromUnit === "feet" && toUnit === "meter") || 
               (fromUnit === "meter" && toUnit === "feet")) {
        conversionType = "feet-meter";
    } else {
        return "Unsupported conversion. Please use feet, inch, or meter.";
    }
    
    // Perform conversion using switch
    switch (conversionType) {
        case "feet-inch":
            if (fromUnit === "feet") {
                return `${value} feet = ${value * 12} inches`;
            } else {
                return `${value} inches = ${value / 12} feet`;
            }
        case "feet-meter":
            if (fromUnit === "feet") {
                return `${value} feet = ${value * 0.3048} meters`;
            } else {
                return `${value} meters = ${value / 0.3048} feet`;
            }
        default:
            return "Invalid conversion type";
    }
}

// Example usage
const value = 5;
const fromUnit = "feet";
const toUnit = "inch";

const result = convertUnit(value, fromUnit, toUnit);
console.log(result); 