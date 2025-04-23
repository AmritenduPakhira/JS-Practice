// js keyword
// 1. var
// 2. let
// 3. const

//hosting

 console.log(x); // undefined (due to hoisting)

var x = 5;
 console.log(x); // 5

//
// let      
 console.log(y); // ReferenceError: Cannot access 'y' before initialization
 let y = 10;
    console.log(y); // 10

//
// const
 console.log(z); // ReferenceError: Cannot access 'z' before initialization
 const z = 15;
    console.log(z); // 15

    //function hosting
    console.log(myFunction()); // Output: "Hello, World!"
    function myFunction() {
        return `Amrit`;
    }

    //redeclaration
    var x = 5;
    var x = 10; // Redeclaring 'x' with var is allowed
    console.log(x); // Output: 10

    let a1 = 5;
    // let a1 = 10; // Error: Identifier 'y' has already been declared
    console.log(a1); // Output: 5

    const a2 = 5;
    //const a2 = 10; // Error: Identifier 'z' has already been declared
    console.log(a2);
   