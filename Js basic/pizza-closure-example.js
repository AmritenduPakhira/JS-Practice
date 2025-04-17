function CreatePizza(flavor){
    return function deliverepizza(callback){
        console.log("Creating pizza with flavor: " + flavor);
        callback(flavor);
    }
}

function customerfeedback(pizza){
    console.log(`Customer feedback for pizza: " ${pizza}`);
}

const myorder = CreatePizza("Margherita"); // closure

myorder(customerfeedback);

//when customerfeedback is called, it has access to the flavor variable from the outer function CreatePizza, even though CreatePizza has finished executing. This is because customerfeedback is a closure that captures the environment in which it was created.
//but if I want to call customerfeedback without creating a pizza, I can do that too. I can just call it directly with a string argument.