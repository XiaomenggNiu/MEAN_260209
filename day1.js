// console.log("hello")
// Primitive data types: immutable
// undefined VS null
// console.log(undefined == null)
let name1 = "Miranda";
name1 = 'JAck'; // asssign a new value, but old one still exists
// Reference: mutable
let person = {name: "Miranda"};
person.name = "Jack"; // object reference doesnot change
// mutable (value can be changed without a new value) VS 
// immutable : value cannot be changed 

// type coercion
// let res = null + "5";
// let res = null + 5;
// let res = 5 / 'abc';
let res = true + false;
// console.log(typeof res, res);
// console.log(NaN == NaN);
// Falsy values: 0, undefined, null, NaN, empty string, false
// let arr = [];
// if (arr.length){
// }

// Scopes: global / funcational, block
// console.log(name1);
// var name1 = "global"; 
// function fn1(){
//     console.log(name2);
//     if (1){
//         var name2 ="function";
//     }
//     console.log(name2);
// }
// fn1();
// console.log(name1);
// console.log(name2);

// Block Scope
// fn2();
// function fn2(){
//     // console.log(name1)
//     const name1 = "const block"
//     if (1){
//         // console.log(name2);
//         let name2 ="block";
//         console.log(name2);
//     }
//     // console.log(name2);
// }

// Hoisting
// var: the definition hoisted to the top of scope
// function: both fn name and body are hoisted
// let/const: not hoisted / TDZ

// sayHello();
// console.log(sayHello);
// var sayHello = function(){
//     console.log("hello");
// }


for(var i = 0; i < 10; i++){
        // allocate new spaces in stack for new values (1, 2, ... 10)
        // all the spaces will be cleared after whole program executing
        console.log(i)
}
console.log("global", i);

// function fn3(){
//     for(var i = 0; i++; i < 10){
//         // allocate new spaces in stack for new values (1, 2, ... 10)
//         // all the spaces will be cleared after function executing
//    }
// }
// fn3();
// console.log("functional scope",i);

for(let i = 0; i < 10; i++){
        // allocate new spaces in stack for new values (1, 2, ... 10)
        // all the spaces will be cleared after the for loop
        console.log(i)
}
console.log("block", i);