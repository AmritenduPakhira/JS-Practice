function person(fname, lname){
 let finame = fname;
 let liname = lname;

 let getacees_data = function(){
    return {finame, liname};
 }

 this.setacees_data = function(){
   return {finame, liname};
 }

 
}

let person1 = new person("Amritendu", "Pakhira");

console.log(person1.getacees_data);
console.log(person1.setacees_data());

