// Problem 1: Print powers of 2 up to 256 using while loop

function printPowersOfTwoWhile() {
    let power = 1;
    let exponent = 0;
    
    console.log("Powers of 2 up to 256:");
    
    // Print powers of 2 until 256 is reached
    while (power <= 256) {
        console.log(`2^${exponent} = ${power}`);
        power *= 2;
        exponent++;
    }
}

// Example usage
printPowersOfTwoWhile(); 