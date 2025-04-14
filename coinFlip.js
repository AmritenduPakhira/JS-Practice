// Problem 4: Simulate a coin flip

function flipCoin() {
    // Generate a random number between 0 and 1
    const random = Math.random();
    
    // If random number is less than 0.5, return "Heads", otherwise return "Tails"
    return random < 0.5 ? "Heads" : "Tails";
}

// Example usage
const result = flipCoin();
console.log("Coin Flip Result:", result); 