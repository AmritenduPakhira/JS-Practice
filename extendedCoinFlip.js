// Problem 3: Extended coin flip problem

function extendedCoinFlip() {
    let headsCount = 0;
    let tailsCount = 0;
    let flips = 0;
    
    console.log("Flipping coin until either Heads or Tails wins 11 times...");
    
    // Flip coin until either Heads or Tails wins 11 times
    while (headsCount < 11 && tailsCount < 11) {
        const result = Math.random() < 0.5 ? "Heads" : "Tails";
        flips++;
        
        if (result === "Heads") {
            headsCount++;
            console.log(`Flip ${flips}: Heads (${headsCount}-${tailsCount})`);
        } else {
            tailsCount++;
            console.log(`Flip ${flips}: Tails (${headsCount}-${tailsCount})`);
        }
    }
    
    console.log(`\nGame Over! ${headsCount > tailsCount ? "Heads" : "Tails"} wins!`);
    console.log(`Total flips: ${flips}`);
    console.log(`Final score: Heads ${headsCount}, Tails ${tailsCount}`);
}

// Example usage
extendedCoinFlip(); 