

//class

class Car{
    constructor(brand,engine,gears){
        this.brand = brand,
        this.wheels = 4,
        this.engine = engine,
        this.gears = gears;

    }

    //to make a method in class

    getCars(){
        return this.brand
    }
}

//to make an object/instance from class
const myObj = new Car("honda","idk",6)

// console.log(myObj.getCars())

//create another class inheriting the properties of the Class car without rewriting

class SUV extends Car{
    constructor(brand,engine,gears,type,color) {
        super(brand,engine,gears);
        this.type = type;
        this.color = color;
        
    }
}

const MySUV = new SUV("tata","BS6",6,"manual","blue")
// console.log(MySUV)

//encapsulation - meaning hiding data from the users


class User{
    #name;
    #marks;
    constructor(name,marks) {
        this.#name = name;
        this.#marks = marks;
    }

    //getters
    get Username(){
        return this.#name;
    }

    get Marks(){
        return this.#marks
    }

    //setters
    set Changeusername(name){
        return this.#name = name;
    }

}

const user = new User("suresh",24)
//we are able to see the marks but we cannot access the marks
//so to access the marks we use getters - getters look like functions but they are not involed like functions , they are written as varibales 

user.Changeusername = "swati"

//console.log(user.Username,user.Marks)


//ABSTRACTION - process of protecting the data by creating an abstract class from which we can only inherit the properties and not the create another object instance from it

class Bottle{
    constructor() {
        if(this.constructor===Bottle){
            throw new Error("object cannot be created by an abstract class")
        }
    }

    Drink(){
        console.log("drink water")
    }
}

//this is not possible
// const glass = new Bottle()

// glass.Drink()

class Water extends Bottle{
    constructor(){
        super()
    }
}

// const glass = new Water()
// glass.Drink()

//POLYMORPHISM - 

class A{
    run(n){
        console.log(n)
    }
}

class B extends A{
    run(a,b){
        console.log(a,b)
    }
}

class C extends B{
    // run(){
    //     console.log("Running")
    // }
}

const payal = new C()
payal.run(1,2)
