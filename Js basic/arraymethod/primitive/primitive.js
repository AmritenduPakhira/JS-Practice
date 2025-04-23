//methods of primitive
// 1. toString
// 2. toUpperCase
// 3. toLowerCase
// 4. toFixed
// 5. toPrecision
// 6. toExponential
// 7. valueOf
// 8. charAt


//1. toString

const num = 123;
const str = num.toString(); // Convert number to   string
console.log(str); // Output: "123"
console.log(typeof str); // Output: "string"
console.log(str.length); // Output: 3
console.log(str.charAt(0)); // Output: "1"
console.log(str.charAt(1)); // Output: "

// tostring
const rollnumber = 2110994839;
const rollnumberString = rollnumber.toString(); // Convert number to string
console.log(rollnumberString); // Output: "2110994839"

//toUpperCase

const name = "amrit pakhira"
const nameUpperCase = name.toUpperCase(); // Convert string to uppercase
console.log(nameUpperCase); // Output: "AMRIT PAKHIRA"


//toLowerCase

const name1 = "AMRIT PAKHIRA"
const nameLowerCase = name1.toLowerCase(); // Convert string to lowercase
console.log(nameLowerCase); // Output: "amrit pakhira"


//tofixed
const num1 = 3.14159;
const fixedNum = num1.toFixed(2); // Convert number to string with 2 decimal places
console.log(fixedNum); // Output: "3.14"


//toPrecision
const num2 = 123.456789;
const precisionNum = num2.toPrecision(4); // Convert number to string with 4 significant digits
console.log(precisionNum); // Output: "123.5"


//toExponential

const num3 = 123456789;
const exponentialNum = num3.toExponential(2); // Convert number to string in exponential notation with 2 decimal places
console.log(exponentialNum); // Output: "1.23e+8"
