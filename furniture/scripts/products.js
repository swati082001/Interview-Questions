const url = 'https://masai-mock.onrender.com';
let carcContainer = document.getElementById('carcContainer');
let form = document.getElementById("adForm");
let popUp = document.getElementById("popDiv");
let furnitureArr=[], wishlistArr=[]; 
let sortByPriceVal, filterByTypeVal;
let updateId;

function getData(){
    fetch(url+'/furniture')
    .then((res)=> res.json())
    .then((res)=> {
        // console.log(res)
        furnitureArr=res;
        appendData(furnitureArr);
    })
}
getData();

function wishlistData(){
    fetch(url+'/furniture_wishlisted')
    .then((res)=> res.json())
    .then((res)=> {
        // console.log(res)
        wishlistArr=res;
    })
}
wishlistData();

function editPop(data){
    console.log(data)
    form.type.value= data.type;
    form.Description.value= data.Description; 
    form.Price.value= data.Price; 
    form.year.value= data.year;
    updateId=data.id;
    popUp.style.display = "grid";
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let newData = {
        type: form.type.value,
        year: form.year.value,
        Description: form.Description.value,
        Price: form.Price.value,
    }
    // console.log(newData);
    editFn(newData);
})
function editFn(data){
    // console.log(data)    
    fetch(url+`/furniture/${updateId}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.error){
            alert('some thing went wrong');            
        }else{     
          alert('successfully Updated');
          form.reset();
          getData();
          popUp.style.display = "none";
        }                
    })
}
function wishlistFn(id){
    let add = furnitureArr.find((el) => el.id == id);      
    let isAvailable = wishlistArr.find((el) => el.id == id);   
    if(isAvailable!==undefined){
        alert('already added')
    }else{
        fetch(url+'/furniture_wishlisted',{
            method: 'POST',
            body: JSON.stringify(add),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res)=> res.json())
        .then((res)=> {
            // console.log(res)
            wishlistData();
            alert('Successfully added to wishlist');        
        })
    }    
}
function deleteFn(id){   
    fetch(url+`/furniture/${id}`,{
        method: 'DELETE',
    })
    .then((res)=> res.json())
    .then((res)=> {
        // console.log(res)
        getData();
        alert('Deleted successfully');        
    })
}
function appendData(data) {
    carcContainer.innerHTML = '';
    data.map((el)=> {
        carcContainer.innerHTML += `<div>
        <img src="https://www.zarla.com/images/zarla-furniture-fixture-1x1-2400x2400-20210701-tbrb37pd79vmh3pkmytd.png?crop=1:1,smart&width=250&dpr=2" alt="">
        <p>${el.Description}</p>
        <h3>${el.type}</h3>
        <p>${el.Price}</p>
        <div>
          <button onclick='editPop(${JSON.stringify(el)})'>edit</button>
          <button onclick='deleteFn(${el.id})'>delete</button>
          <button onclick='wishlistFn(${el.id})'>wishlist</button>
        </div>
      </div> ` 
    })
}

function sortByAge(){
    sortByPriceVal=document.getElementById('price').value;
    mainFilter(sortByPriceVal);
}
function filterByGender(){
    filterByTypeVal=document.getElementById('type').value;
    mainFilter(filterByTypeVal);
}

function mainFilter(value){
  console.log(value)
  if(value==='lth'){
    furnitureArr = furnitureArr.sort((a, b) => a.Price - b.Price);
    appendData(furnitureArr);
  }else if(value==='htl'){
    furnitureArr = furnitureArr.sort((a, b) => b.Price - a.Price);
    appendData(furnitureArr);
  }else if(value=='chair'){
    furnitureArr = furnitureArr.filter((el) => el.type == "chair");
    appendData(furnitureArr);
  }else if(value==='table'){
    furnitureArr = furnitureArr.filter((el) => el.type == "table");
    appendData(furnitureArr);
  }else if(value==='sofa'){
    furnitureArr = furnitureArr.filter((el) => el.type == "sofa");
    appendData(furnitureArr);
  }else if(value==='bed'){
    furnitureArr = furnitureArr.filter((el) => el.type == "bed");
    appendData(furnitureArr);
  }else if(value===''){
    getData();
  }
}


