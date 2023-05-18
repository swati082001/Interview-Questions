
 var x = 100;

// function test(){
//     var x = (i = 10);  // because according to precedence, the assignment operator moves from right ot left and therefore i=10 will get exceuted first and then as x is already declared in the global scope it will take that value
// }

function test(){
    //shadowing 
    console.log("hello",x)
    var i=10,
   x = i
    
}

test()