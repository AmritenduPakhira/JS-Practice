// string methods
// // 1. charAt
// // 2. charCodeAt
// // 3. concat
// // 4. includes
// // 5. indexOf
// // 6. lastIndexOf
// // 7. match
// // 8. replace
// // 9. search
// // 10. slice
// // 11. split


//1. charAt
const str1 = "Aelcometothe world of JavaScript!";
const charAtIndex = str1.charAt(7); // Get character at index 7

console.log(charAtIndex); // Output: "o"

//2. charCodeAt
const charCodeAtIndex = str1.charCodeAt(0); // Get character code at index 7
console.log(charCodeAtIndex); // Output: 111 (character code for 'o')

//concat
const a1 = "Math";
const b1 = "English";

const c = a1.concat(b1);

console.log(c);

//includes
const str2 = "RCB will win the IPL trophy in 2025";
const includesWord = str2.includes("RCB"); // Check if "RCB" is present in the string
console.log(includesWord); // Output: true

//indexOf

const str3 = "RCB will win the IPL trophy in 2025";
const indexOfWord = str3.indexOf("RCB"); // Get the index of "RCB" in the string
console.log(indexOfWord); // Output: 0

//lastIndexOf

const str4 = "RCB will win the IPL trophy in 2025. RCB is the best team.";
const lastIndexOfWord = str4.lastIndexOf("RCB"); // Get the last index of "RCB" in the string
console.log(lastIndexOfWord); // Output: 36

//match

const str5 = "RCB will win the IPL trophy in 2025. RCB is the best team.";
const regex = /RCB/g; // Regular expression to match "RCB"
const matchResult = str5.match(regex); // Get all matches of "RCB" in the string
console.log(matchResult); // Output: ["RCB", "RCB"]

//replace
const str6 = "RCB will win the IPL trophy in 2025. RCB is the best team.";
const replacedStr = str6.replace(/RCB/g, "Royal Challengers Bangalore"); // Replace "RCB" with "Royal Challengers Bangalore"
console.log(replacedStr); // Output: "Royal Challengers Bangalore will win the IPL trophy in 2025. Royal Challengers Bangalore is the best team."

//split

const str7 = "RCB will win the IPL trophy in 2025. RCB is the best team.";
const splitStr = str7.split(" "); // Split the string into an array of words
console.log(splitStr); // Output: ["RCB", "will", "win", "the", "IPL", "trophy", "in", "2025.", "RCB", "is", "the", "best", "team."]




