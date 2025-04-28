function Worker(name){
     console.log(`Worker name is ${name}`);
}

function decorator(func){
    return function(name){
        console.log("starting function...");
        func(name);
        console.log("ending function...");
    }
}

worker = decorator(Worker);
worker("Amrit");