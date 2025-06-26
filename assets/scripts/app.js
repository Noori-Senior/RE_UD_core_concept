import * as util_content  from "./util.js";

function greet(name, message){
    return "Hi "+name+message;
}
 
console.log(greet("mursal"," i am Max"));


// H1
// Exercise: Working with Functions
// Your task is to write a new function that should be named combine and have the following characteristics:

// Accept three input values

// Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

// Return the calculated result


function combine(a, b, c){
    return a * b / c;
}

console.log("ur colculation result is = "+combine(5,2,10));



// arrow function is another way of defining function
const al =()=>{
    console.log("Arrow function");
}
al ()

let arrowo =()=>{
    console.log("Second Arrow function");
}
arrowo();

// Object and class
const person ={
    name:"mursal",
    age:"23",
    greett(){
        console.log("Hello "+this.name);
        console.log("ur age is "+this.age);
    }
}
console.log(person);
console.log(person.greett());


// class 
class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        // array definition
        const hobbies = ["swimming","cycling","reading"];
        hobbies.push("working")
        const index = hobbies.findIndex((item)=>{
            return item === "swimming";
            
        });
            const mapping = hobbies.map((item)=>item+"!");

        let eat = "water";
        console.log(this.name+" eats 8 glass "+eat+"in a day and most of the time her hobby is "+hobbies[3]+"and"+index+" the value of "+mapping);
    }   
}

const user1 = new User("Manuel",35);
console.log(user1.greet());
// H2
// Your task is to add the missing logic to a
function  transformToObjects(num) {
   
   const misslogic =num.map((item)=>({val:item}));
    return misslogic;
}
const obj =[1,2,3];
console.log(transformToObjects(obj));
// const pass = prompt('ur pass');
