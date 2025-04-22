function order(flavor){
    return function deliverepizza(callbcak){
        console.log("Creating pizza with flavor: " + flavor);
        callback(flavor);
    }
}

function customerfeedback(pizza){
    console.log(`Customer feedback for pizza: " ${pizza}`);
}

const myorder = order("Margherita"); // closure

myorder(customerfeedback); // closure