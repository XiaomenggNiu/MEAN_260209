let str: string = "hello";
console.log(str);

// type of array
// | : union type
const users: Array<string | number> = [];

// any: allows every types, remove the type safety
const price: any[] =[]

// tuple
const arr: [number,string] = [1, ''];

// <T>: generic type parameter
// Array<T>

// Decorator: fn, attach metadata to classes/properties
// @Component({

// })
// class AppComponent{
//     @Input() fromParent = '';
// }

// Enum
enum Status{
    Loading = 9,
    Success = 1,
    Error = 6
}
Status.Error
Status.Loading

// interface: define the structure of an obj
interface User {
    id: number;
    name: string;
    email?: string;
}
const person1: User = {
    id: 1,
    name: "Miranda",
    email: "email@com"
}
// optional properties
// ?: console.log(person1.email?.length)
// If condition: if (person1.email) console.log(person1.email.length)
// !: non-null assertion
console.log(person1.email!.length)


// JIT(just in time) VS AOT(ahead of time)

// private protected public: control where the property can be accessed
// public
class User{
    name: string = '';
    private password = '123';
    protected age = 1;

    get getPassword(){
        return this.password;
    }
}
class Student extends User{
    hello(){
        console.log(this.age);
    }
}
const user1 = new User();
user1.name;
user1.getPassword;
user1.age;

// TypeGuard: typeof 
function print(id: number | string){
    if (typeof id === "string") console.log(id.toLowerCase());
    console.log(id);
}

