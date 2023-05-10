
const handleclick = throt(()=>{
    document.getElementById("throttle").disabled = false
    console.log("hello");
},2000)


function throt(func,delay){
    return ()=>{
        document.getElementById("throttle").disabled = true
        setTimeout(()=>{
            func()
        },delay)
    }
}