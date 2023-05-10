//rest operator in array  - it will show the rest of the elements combined in  an array

function ShowingRest(a,b,c,...args){
   console.log(args) // [4,5,6,7,8]
    console.log(a+b+c) //1+2+3=6;
}

ShowingRest(1,2,3,4,5,6,7,8);

//spread operator

let arr = [1,2,3,4,5,6,7,8]

function SpreadOps(a,b,c,...args){ //here we are using rest operator
    console.log(a)
}

SpreadOps(...arr) //here we are using spread operator- spreading the array arr 


//Objects-rest operator

const stud = {
    name:"Swati",
    age:21,
    mobile:8018531080,
    hobbies:["painting","binge watching"]
}

 let age = stud["age"] / stud.age;//21

let hobbies = stud.hobbies;
console.log(hobbies[1])

// destructuring

// let {hobbies} = stud;
// console.log(hobbies)

// const {age,...rest} = stud;
// console.log(rest)

// stud.age = 23;
// console.log(stud)

let newStud = {
    ...stud,
    age:26
}

console.log(newStud)


