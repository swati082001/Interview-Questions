let datas=[
    {name:"Swati",age:21},
    {name:"sanjna",age:22}
]

function getdata(){
    setTimeout(()=>{
        let output=""
        datas.forEach((el)=>{
            output+=`<li>${el.name}</li>`
        })
        console.log(output)
    },1000)
}

// function PushData(newdata){
//     setTimeout(() => {
//         datas.push(newdata)
//     }, 2000);
// }

// getdata()
// PushData({name:"sushmita",age:21})

//here if the time given to the getdata is less than pushdata, then only the initial object will get rendered beacuse after that certain interval a new data is getting pushed .

//this can be solved by callbacks

function PushData(newdata,callback){
        setTimeout(() => {
            datas.push(newdata)
            callback()
        }, 2000);
    }
    
    
PushData({name:"sushmita",age:21},getdata)

//callback is a function that can be sent as an argument into another function and can be invoked whenever needed.