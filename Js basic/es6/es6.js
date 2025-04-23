//template literals
const name = 'Amrit';
const age = 25;

comsole.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Amrit and I am 25 years old.

//
// Destructuring assignment
const person = {
    name: 'Amrit',
    age: 25,
    city: 'Kolkata'
};
const { name: personName, age: personAge } = person; // Destructuring object properties
console.log(personName); // Output: Amrit

// Destructuring array
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers; // Destructuring array elements
console.log(first); // Output: 1

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // Merging two arrays using spread operator
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Rest parameter
function sum(...numbers) { // Using rest parameter to accept variable number of arguments
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// Default parameters
function greet(name = 'Guest') { // Using default parameter value
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!

console.log(greet('Amrit')); // Output: Hello, Amrit!

//
// Optional chaining

const user = {
    name: 'Amrit',
    address: {
        city: 'Kolkata'
    }
};  

const city = user.address?.city; // Using optional chaining to access nested property
console.log(city); // Output: Kolkata

// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Amrit', 25); // Creating an instance of Person using constructor function
console.log(person1.name); // Output: Amrit