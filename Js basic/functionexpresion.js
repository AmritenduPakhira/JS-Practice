const myfunction = function (a, b) {
    return a + b;
    }

    console.log(myfunction(2, 3));  //fucntion expression

    function greet(name){
        console.log("Hello " + name);
    }

    greet("John"); 

    (function(){
console.log("IIFE: This is an immediately invoked function expression.");
    })
    ()



    //

    const greetings =  function greet(name){
        console.log("Hello " + name);
    }

    greetings("John"); // function expression


    // Assigning a function to a variable (First-Class Function)
const greets = function(name) {
    return "Hello, " + name;
  };
  
  // Passing function as argument (callback)
  function displayMessage(fn) {
    console.log(fn("John"));
  }
  
  displayMessage(greets); 

  //callbcak function

  function fetchData(callback) {    
   
    setTimeout(() => {
      const data = [{ id: 1, name: "John Doe" }, {id: 2, name: "Jane Doe" }]; // Simulating data fetching
      callback(data); // Calling the callback function with the fetched data
    }, 2000);
  } 

  fetchData(function(data) {
    console.log("Fetched data:", data);
  })

  


  


