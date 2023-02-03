function findName() {
  let x = "suneet";
  console.log(x);
  function searchName() {
    console.log(x + "Amit");
  }
  x = "shubham";
  return searchName;
}

let store = findName();
console.log(store);
console.log(store());
