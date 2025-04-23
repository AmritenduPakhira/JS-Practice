
// use push mmethod of array
const cricketer = [{
    name: "Sachin Tendulkar", age: 23}, {name: "Virat Kohli", age: 35}, {name: "MS Dhoni", age: 40}];

    cricketer.push({name: "Rohit Sharma", age: 35});
    cricketer.push({name: "Ravindra Jadeja", age: 34});

    console.log(cricketer);



    // use pop method of array
    const fotballer = [{name: "Ronaldo", age: 38}, {name: "Messi", age: 36}, {name: "Neymar", age: 31}];
    console.log(fotballer);
    fotballer.pop({name: "Ronaldo", age: 38});

    console.log(fotballer);

    // use shift method of array

    const basketballer = [{name: "Kobe Bryant", age: 41}, {name: "Michael Jordan", age: 60}, {name: "LeBron James", age: 38}];
    console.log(basketballer);
    basketballer.shift({name: "Kobe Bryant", age: 41});
    console.log(basketballer);  

    //use unshift method of array

    const hockeyer = [{name: "Wayne Gretzky", age: 62}, {name: "Sidney Crosby", age: 35}, {name: "Alex Ovechkin", age: 37}];
    console.log(hockeyer);
    hockeyer.unshift({name: "Wayne Gretzky", age: 62});
    console.log(hockeyer);

    //use sort method of array

    const tennis = [{name: "Roger Federer", age: 42}, {name: "Rafael Nadal", age: 37}, {name: "Novak Djokovic", age: 36}];
    console.log(tennis);
    tennis.sort((a, b) => a.age - b.age);
    console.log(tennis);

    //use reverse method of array

    const cricketer1 = [{name: "Sachin Tendulkar", age: 23}, {name: "Virat Kohli", age: 35}, {name: "MS Dhoni", age: 40}];
    console.log(cricketer1);
    cricketer1.reverse((a, b) => a.age - b.age);
    console.log(cricketer1);

    //use splice method of array

    const footballer1 = [{name: "Ronaldo", age: 38}, {name: "Messi", age: 36}, {name: "Neymar", age: 31}];
    console.log(footballer1);
    footballer1.splice(0, 1, {name: "Ronaldo", age: 38});
    console.log(footballer1);