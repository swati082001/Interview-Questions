function sum(a, b, c) {
  return a + b + c;
}

let res = sum(1, 2, 3);
console.log(res);
//in currying

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let ans = add(1)(2)(3);
console.log(ans);
