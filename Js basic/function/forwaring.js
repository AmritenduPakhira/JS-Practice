function Worker(name){
    console.log(`Worker name is ${name}`);
}

function decorator(func){
   return function(...arg){
       console.log("starting function...");
       func.apply(this, arg);
       console.log("ending function...");
   }
}

worker = decorator(Worker);
worker("Amrit");