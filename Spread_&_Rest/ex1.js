//Rest operator
////with array
function sum(a, b, c, ...others) {
  console.log(others);
  return a + b + c;
}

let ans = sum(1, 2, 3, 4, 5, 6, 7);

console.log(ans);

////with object
let details = {
  id: 1,
  name: "Suneet",
  place: "Balangir",
  age: "22",
};

let { age, ...rest } = details;
console.log(rest);

//Spread operator
////with array
let names = ["Suneet", "Swagat", "Shubham"];
function getNames(name1, name2) {
  console.log(name1, name2);
}
getNames(...names);

////with object
let students = {
  id: 1,
  name: "Swagat",
  place: "Balangir",
  state: "Odisha",
  grad: "Medic",
};

let newstudent = {
  ...students,
  name: "Suneet",
  grad: "Btech",
  current: "Full Stack Webdev",
};

console.log(newstudent);
