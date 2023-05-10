
const obj={
    name:'swati',
    age:21,
    getName(){
        return this.name
    }
}  //obj ka prototype is an object

const obj2 = {
    name:"simran",
    rollno:32,
    __proto__:obj
}

const obj3={
    degree:"geology",
    __proto__:obj2
}
//console.log(obj3.getName())  //if obj2 already has the key name , then the value will come from obj 2 and not from obj 1 becuase we are prototyping obj in obj2 but the this keyword is pointing to the name in that particular object first ,therefore simran will get printed and not swati.

const arr = [1,2,3,4,5]
const name="swati"

console.log(arr)
let concat = arr.concat(name)
//console.log(concat) //[1,2,3,4,5,"swati"]

function MyPrototype(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
}

const myproto = new MyPrototype("swati",21,"blore")

console.log(myproto)