//arrowfunction with foreach
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number); // Using arrow function to square each number
console.log(squares); // Output: [1, 4, 9, 16, 25]

//foreach
const ipltem = ["RCB", "CSK", "SRH", "MI", "DC"];

iplteam.array.forEach(element => {
    element = element.toLowerCase(); // Convert each team name to uppercase
    console.log(element);
});

//set
const set = new Set([1, 2, 3, 4, 5]);
set.add(6); // Add a new element to the set
set.delete(2); // Remove an element from the set
set.has(3); // Check if the set contains a specific element

//weakset
const weakSet = new WeakSet();
const obj1 = { name: "RCB" };
const obj2 = { name: "CSK" };
weakSet.add(obj1); // Add an object to the weak set
weakSet.add(obj2); // Add another object to the weak set
weakSet.delete(obj1); // Remove an object from the weak set


//Map
const map = new Map();
map.set("RCB", "Royal Challengers Bangalore"); // Set a key-value pair in the map

//weakmap
const weakMap = new WeakMap();
const obj3 = { name: "RCB" };
const obj4 = { name: "CSK" };
weakMap.set(obj3, "Royal Challengers Bangalore"); // Set a key-value pair in the weak map
weakMap.set(obj4, "Chennai Super Kings"); // Set another key-value pair in the weak map
weakMap.delete(obj3); // Remove a key-value pair from the weak map