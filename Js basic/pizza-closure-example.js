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




 
