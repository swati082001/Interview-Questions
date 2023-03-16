const url = "https://masai-mock.onrender.com";
let form = document.getElementById("adForm");
let popUp = document.getElementById("popDiv");
let formData;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formData = {
    type: form.type.value,
    year: form.year.value,
    Description: form.Description.value,
    Price: form.Price.value,
  };
//   console.log(formData);
  popUp.style.display = "grid";
});
function nextInput(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();    
  }  
}
function checkOtp() {
  let first = document.getElementById("ist");
  let sec = document.getElementById("sec");
  let third = document.getElementById("third");
  let fourth = document.getElementById("fourth");
  let userOTP = first.value + sec.value + third.value + fourth.value;
//   console.log(userOTP);
  if(userOTP==='1234'){
      postData();
      popUp.style.display = "none";
  }else{
    alert('wrong OTP');
  } 
}

function postData(){
    // console.log(formData);
    fetch(url+'/furniture', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.error){
            alert('some thing went wrong');
            form.reset()
        }else{     
          alert('successfully added');
          form.reset()
        }                
    })
}
