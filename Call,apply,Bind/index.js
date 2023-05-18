
//call()  -  call is a built in function in javascript which inovoke a function having this keyword , and can be used to point the this to any object , the function can be present inside an object or independently;

let obj1 = {
    name:"aditya",
    age:21,
    getName:function(){
        console.log(this.name)
    }
}

//we can also create a function individually as well and can point it to any object of our choice
function getdetails(college){
    console.log(this,college)
}

let obj2={
    name:"swati",
    age:21,
}

//here if we want to point the get name to obj2 , then we will use call()

obj1.getName.call(obj2); //swati and not aditya
getdetails.call(obj1,"ism dhanbad") //this keyword here is going to point to obj1


//apply() - it is the same as call but it takes an array of agruments 

getdetails.apply(obj1,["ism dhanbad"]);

//bind() - 

