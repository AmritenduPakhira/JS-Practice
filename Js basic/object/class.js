class car{

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(age){
        return `${this.name} age is ${age}`;
    }
}

let myCar = new car("Ford", 2014);

console.log(myCar.age(2025));
