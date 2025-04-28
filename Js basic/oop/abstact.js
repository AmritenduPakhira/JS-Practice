class person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    fullname(){
        return `${this.fname} ${this.lname}`;
    }
}

let person1 = new person("Amritendu", "Pakhira");

console.log(person1.fullname());
