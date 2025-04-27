console.log("start");

setTimeout(() => {
    console.log("timeout");
}, 1000);

Promise.resolve().then(()=>{
    console.log("promise"); 
})

console.log("end");


