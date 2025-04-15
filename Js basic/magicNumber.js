// Problem 2: Magic Number game

function findMagicNumber() {
    let low = 1;
    let high = 100;
    let guess;
    let response;
    
    console.log("Think of a number between 1 and 100.");
    
    // Binary search to find the magic number
    while (low <= high) {
        guess = Math.floor((low + high) / 2);
        
        // In a real implementation, you would get user input here
        // For demonstration, we'll simulate the user's response
        console.log(`Is your number less than ${guess}? (yes/no)`);
        
        // Simulate user response (in a real implementation, this would be user input)
        // For demonstration, let's assume the magic number is 42
        const magicNumber = 42;
        response = guess > magicNumber ? "yes" : "no";
        
        if (response === "yes") {
            high = guess - 1;
        } else {
            low = guess + 1;
        }
    }
    
    console.log(`Your magic number is ${guess}!`);
}

// Example usage
findMagicNumber(); 