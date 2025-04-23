// Problem 2: Check if two numbers are palindromes

function isPalindrome(num) {
    // Convert number to string
    const numStr = num.toString();
    
    // Compare the string with its reverse
    return numStr === numStr.split('').reverse().join('');
}

function checkPalindromes(num1, num2) {
    // Convert inputs to numbers if they're strings
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    // Check if inputs are valid
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input. Please enter valid numbers.";
    }
    
    // Check if numbers are palindromes
    const isNum1Palindrome = isPalindrome(num1);
    const isNum2Palindrome = isPalindrome(num2);
    
    // Return results
    return {
        num1: {
            value: num1,
            isPalindrome: isNum1Palindrome
        },
        num2: {
            value: num2,
            isPalindrome: isNum2Palindrome
        }
    };
}

// Example usage
const num1 = 12321;
const num2 = 12345;

const result = checkPalindromes(num1, num2);
console.log(`Is ${num1} a palindrome? ${result.num1.isPalindrome}`);
console.log(`Is ${num2} a palindrome? ${result.num2.isPalindrome}`); 