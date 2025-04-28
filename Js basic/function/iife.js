//IIFE(Immediately Invoked Function Expression) is a function that runs as soon as it is defined.

(function(){
    console.log("It is IIFE function");
}
)

();

//NFE

let factorial = function fact(num) {
    if(num <= 1){
        return 1;
    }
    return num * fact(num - 1);
}

console.log(factorial(5));

// new function when in javascript we call the function dynamically

let sum  = new Function(`a`,`b`, `return a + b`);
console.log(sum(5, 10)); // Output: 15


//apply

function add(a,b){
    return a + b;
}

function result(add, a, b){
    return add.apply(this, [a, b]);
}

console.log(result(add, 5, 10)); // Output: 15

function greeting(message){
    return `${message} ${this.name}`;
}

let user = {
    name: "Amrit"
};

console.log(greeting.call(user, "Hello")); // Output: Hello amrit

//bind

let college = {
    name: "Chitkara University",
    location: "Punjab",

    getDetails(){
        console.log( `${this.name} is located in ${this.location}`)
    }
}

let results = college.getDetails.bind(college);
results(); // Output: Chitkara University is located in Punjab

