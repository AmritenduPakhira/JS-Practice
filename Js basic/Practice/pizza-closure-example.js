function CreatePizza(flavor){
 function deliverepizza(){
        console.log("Creating pizza with flavor: " + flavor);
        customerfeedback(flavor);
        customerrarting(flavor);
    }

    return deliverepizza
}

function customerfeedback(pizza){
    console.log(`Customer feedback for pizza: " ${pizza}`);
}

function customerrarting(pizza){
    console.log(`Customer rating for pizza: " ${pizza}`);
}

const myorder = CreatePizza("Margherita"); // closure

const myorder2 = CreatePizza("Pepperoni"); // closure

myorder(); 





 
