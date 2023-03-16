

url="https://json-server-vercel-git-main-guptaneha0111.vercel.app/product"

//pagination
let page=1;

//add data
let addproduct = async () =>{
    let pname=document.getElementById("name").value;
    let pprice=+document.getElementById("price").value;
    let pdesc=document.getElementById("description").value;
    let pdelivery=document.getElementById("delivery").value;
    let pimage=document.getElementById("image").value;

    let product={
        pname,
        pprice,
        pdesc,
        pdelivery,
        pimage,
    };
console.log(product)
    let res= await fetch(url,{

        method:"POST",
        body:JSON.stringify(product),
headers:{
    "Content-Type": "application/json",
},
    })
    getdata();
};

//getdata
let getdata =  async () => {
    let res=await fetch(`${url}?_page=${page}&_limit=5`);
    res= await res.json();
    appenddata(res);
    console.log("res:",res)
    };
    
    getdata();



    let container=document.getElementById("container");

let appenddata = (data) =>{
    container.innerHTML="";
    data.forEach(({pname,pprice,pdesc,pdelivery,pimage,id}) =>{
        let div=document.createElement("div");
        div.setAttribute("class", "item");

        let image=document.createElement("img");
        image.src=pimage;

        let name=document.createElement("h3");
        name.innerText=pname;

        let price=document.createElement("p");
        price.setAttribute("class", "product_price");
        price.innerText=pprice;

        let desc=document.createElement("h3");
        desc.innerText=pdesc;

        let delivery=document.createElement("h3");
        delivery.setAttribute("class", "product_delivery");
        delivery.innerText=pdelivery;

        let delbtn=document.createElement("button");
        delbtn.setAttribute("class", "remove_item");
        delbtn.innerText="Delete";
        delbtn.onclick = () =>{
            deleteitem(id);
        }

        let update=document.createElement("button");
        update.setAttribute("class", "update_price");
        update.innerText="Update Price";
        update.onclick = () =>{
            updateprice(id);
        }

div.append(image,name,price,desc,delivery,delbtn,update);
container.append(div);
        
    })
}


//delete
let deleteitem = async (id) =>{

    let res= await fetch(`${url}/${id}`,{
        method: "DELETE",
    });
    getdata();
}

//update
let  updateprice = async (id) =>{

    const new_price= window.prompt("Enter new price");

    let newdata1= {pprice: new_price};
    let res= await fetch(`${url}/${id}`,{
        method: "PATCH",
        body:JSON.stringify(newdata1),
        headers:{
            "Content-Type": "application/json",
        },
        });
getdata();
}


//sorting
async function low(){
    let res = await fetch(`${url}?_sort=pprice&_order=asc`);
    res= await res.json();
    console.log(res);
    appenddata(res)
}

async function high(){
    let res = await fetch(`${url}?_sort=pprice&_order=desc`);
    res= await res.json();
    console.log(res);
    appenddata(res)
}


//filter
let greaterp = async () =>{
    let res= await fetch(`${url}?pprice_gte=500`);
    res= await res.json();
    appenddata(res);
}

let lessp = async () =>{
    let res= await fetch(`${url}?pprice_lte=499`);
    res= await res.json();
    appenddata(res);
}


//pagination
async function previous(){
    if(page===0){
        return;
    }
    console.log(page);
    page--;
    getdata();
}

async function next(){
    page++;
    getdata();
}