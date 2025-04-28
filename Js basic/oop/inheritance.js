class person{

    constructor(name){
        this.name = name;
    }
    
    getfullname(){
        return `${this.name} with fullname`;
    }

}

class student extends person{
    constructor(name, age){
        super(name);
        this.age = age;
    }
    
    getfullname(){
        return `${super.getfullname()} and ${this.age} with age`;
    }
}

let student11 = new student("Amritendu", 20);
console.log(student11.getfullname());
