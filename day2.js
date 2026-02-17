// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }
// const animal = new Animal("name");
// class Cat extends Animal{ // Prototype = Animal.prototype
//     constructor(name){
//         super(name); // calling the constructor from parent class
//     }
// }

// let obj1 = new Object({})
// let obj2 = {}
// let obj3 = Object.create({name: "miranda"})

// Abstraction
// Abstract class
// class Animal {
//     breathe(){
//         console.log("I am breathing...")
//     }
//     run(){
//         throw new Error("Please implement the method")
//     }
// }
// // derived class from Animal
// class Cat extends Animal{
//     run(){
//         console.log("I am running");
//     }
// }
// const cat = new Animal();
// cat.run();
// Inheritance
// Encapsulation
// class Counter {
//     #count;
//     constructor(){
//         this.#count = 0;
//     }

//     get currentCount(){
//         return this.#count;
//     }
//     set newCount(val){
//         this.#count += val;
//     }
// }
// const counter = new Counter();
// counter.newCount = 10;
// console.log(counter.currentCount);

// Polymorphism
// class Animal {
//     talk(){
//         console.log("Talking")
//     }
// }
// class Cat extends Animal{
//     talk(){
//         console.log("Meow")
//     }
// }
// class Dog extends Animal{
//     talk(){
//         console.log("Bark")
//     }
// }
// const cat = new Cat();
// const dog = new Dog();
// cat.talk();
// dog.talk();

// Prototype-based, class is just syntax sugar
// [[Prototype]]
// constructor function
function Person(){
    this.name = "Miranda",
    this.age = 20
}
Person.prototype.gender = "Female";
const p1 = new Person();
p1.name = "Mike";
console.log(p1.__proto__);
console.log(p1.gender);
const p2 = new Person();
console.log(p2);
console.log(p2.gender);
// Object.setPrototype()
// Prototype Chain

// Array.myOwnMap()
console.log([1, 2, 3]);
// Array.prototype.myMap(...)