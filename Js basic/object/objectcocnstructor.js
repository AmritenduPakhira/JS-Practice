function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

let person1 = new person("Amritendu", "Pakhira");
let person2 = new person("Raj", "Kumar");

console.log(person1.firstname);
console.log(person2);


