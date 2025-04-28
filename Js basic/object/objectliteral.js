let person = {
    firstname: "John",
    lastname: "Doe",
    fullname() {
        return `The name of the person is ${person.firstname} ${person.lastname}`;
    },

    adress : {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
}

console.log(person.fullname());
console.log(person.adress.zip);

