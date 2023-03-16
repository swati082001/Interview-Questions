const url = 'https://masai-mock.onrender.com';
let wishlistArr=[];

function getData(){
    fetch(url+'/furniture_wishlisted')
    .then((res)=> res.json())
    .then((res)=> {
        // console.log(res)
        wishlistArr=res;
        appendData(wishlistArr);
    })
}
getData();

function appendData(data) {
    carcContainer.innerHTML = '';

    data.map((el)=> {
        carcContainer.innerHTML += `<div>
        <img src="https://www.zarla.com/images/zarla-furniture-fixture-1x1-2400x2400-20210701-tbrb37pd79vmh3pkmytd.png?crop=1:1,smart&width=250&dpr=2" alt="">
        <p>${el.Description}</p>
        <h3>${el.type}</h3>
        <p>${el.Price}</p>   
        <div>
           <button onclick='deleteFn(${el.id})'>Remove</button>
        </div>     
      </div> ` 
    })
}

function deleteFn(id){   
    fetch(url+`/furniture_wishlisted/${id}`,{
        method: 'DELETE',
    })
    .then((res)=> res.json())
    .then((res)=> {
        // console.log(res)
        getData();
        alert('Deleted successfully form wishlist');        
    })
}