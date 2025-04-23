// Problem 4: Gambler's problem

function gamblersProblem() {
    let stake = 100; // Initial stake
    const goal = 200; // Goal amount
    let bets = 0;
    let wins = 0;
    
    console.log(`Starting with Rs ${stake} and aiming for Rs ${goal}...`);
    
    // Continue betting until broke or goal is reached
    while (stake > 0 && stake < goal) {
        bets++;
        
        // Place a bet of Re 1
        const bet = 1;
        
        // 50% chance of winning
        if (Math.random() < 0.5) {
            stake += bet;
            wins++;
            console.log(`Bet #${bets}: Won! Current stake: Rs ${stake}`);
        } else {
            stake -= bet;
            console.log(`Bet #${bets}: Lost! Current stake: Rs ${stake}`);
        }
    }
    
    // Print results
    console.log("\nGame Over!");
    if (stake >= goal) {
        console.log("Congratulations! You reached your goal!");
    } else {
        console.log("Sorry! You went broke!");
    }
    console.log(`Final stake: Rs ${stake}`);
    console.log(`Total bets: ${bets}`);
    console.log(`Total wins: ${wins}`);
    console.log(`Win percentage: ${((wins / bets) * 100).toFixed(2)}%`);
}

// Example usage
gamblersProblem(); 