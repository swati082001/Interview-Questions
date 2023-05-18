//1.

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 1000);

// while(true){

// }

// console.log(3)  // the answer will be 1, then an infinite loop so nothing will get printed

//2.
// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 0);

// Promise.resolve().then(()=>{
//     console.log(3)
// })
// console.log(4)  output - 1432

//3.
// console.log(1)
// setTimeout(() => {
//     console.log(2)
//     Promise.resolve().then(()=>{
//         console.log(3)
//     })
//     console.log(4)
// }, 0);


// console.log(5) output - 1 5 2 4 3


// console.log(1)
// setImmediate(function(){
//     console.log(2)
// })

// process.nextTick(function(){
//     console.log(3)
// })

// console.log(4)  //answer - 1 4 3 2

// console.log(1)

// setTimeout(() => {
//     console.log(2)
//     process.nextTick(function(){
//             console.log(3)
//         })
// }, 0);

// setImmediate(function(){
//         console.log(4)
// })

// console.log(5)  //o/p 


// console.log(Number("1")-1==0)

// var func = function func(){
//     console.log(func===func)
// }

// func()

// function foo(){
//     console.log(this.a)
// }

// var a = 10;
// let obj={a:20,foo:foo}
// obj.foo()

// var a = 10;
// function foo(){
//     var a = 20;
//     bar()
// }

// function bar(){
//     console.log(this) //here this is refereing to the global object
// }

// foo()

// var obj1={
//     a:10,
//     foo:function(){
//         console.log(this.a)
//     }
// }

// let obj2={a:20};

// obj1.foo.call(obj2)

var a = 10;
var obj1={
        a:10,
        foo:function(){
            console.log(this.a)
        }
    }

    var bar = obj1.foo;
    bar() //undifined because now if we are assigning it to another variable then it becomes an independent function and do not act as a method of an object therefore, the this in tis function will refer to the global object instead of the obj1. so undefined is the answer.

    