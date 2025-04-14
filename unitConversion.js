// Problem 5: Unit Conversion

// a. Convert 42 inches to feet
const inches = 42;
const feet = inches / 12;
console.log(`${inches} inches = ${feet} feet`);

// b. Convert 60 feet x 40 feet to meters
const lengthFeet = 60;
const widthFeet = 40;
const lengthMeters = lengthFeet * 0.3048;
const widthMeters = widthFeet * 0.3048;
console.log(`${lengthFeet} feet x ${widthFeet} feet = ${lengthMeters.toFixed(2)} meters x ${widthMeters.toFixed(2)} meters`);

// c. Calculate area of 25 plots in acres
const plotArea = lengthFeet * widthFeet;
const totalArea = plotArea * 25;
const areaInAcres = totalArea / 43560; // 1 acre = 43,560 square feet
console.log(`Area of 25 plots = ${areaInAcres.toFixed(2)} acres`); 