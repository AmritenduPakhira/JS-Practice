// Problem 3: Check if a number and its palindrome are both prime

function isPrime(num) {
    // Convert input to number if it's a string
    num = parseInt(num);
    
    // Check if input is valid
    if (isNaN(num) || num <= 1) {
        return false;
    }
    
    // Check if number is prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

function getPalindrome(num) {
    // Convert number to string
    const numStr = num.toString();
    
    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');
    
    // Convert back to number
    return parseInt(reversedStr);
}

function checkPrimePalindrome(num) {
    // Convert input to number if it's a string
    num = parseInt(num);
    
    // Check if input is valid
    if (isNaN(num)) {
        return "Invalid input. Please enter a valid number.";
    }
    
    // Check if number is prime
    const isNumPrime = isPrime(num);
    
    // Get palindrome
    const palindrome = getPalindrome(num);
    
    // Check if palindrome is prime
    const isPalindromePrime = isPrime(palindrome);
    
    // Return results
    return {
        number: {
            value: num,
            isPrime: isNumPrime
        },
        palindrome: {
            value: palindrome,
            isPrime: isPalindromePrime
        }
    };
}

// Example usage
const num = 13;

const result = checkPrimePalindrome(num);
console.log(`Is ${num} a prime number? ${result.number.isPrime}`);
console.log(`Palindrome of ${num} is ${result.palindrome.value}`);
console.log(`Is the palindrome a prime number? ${result.palindrome.isPrime}`); 