//Global Scope
{
  var a = 10;
}
console.log(a);

//Block scope
{
  var b = 10;
  //   console.log(b);
}
console.log(b);

//Functional Scope
function c() {
  var d = 45;
}

c();
console.log(d);
