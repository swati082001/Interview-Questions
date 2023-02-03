let sum = (a, b) => {
  console.log(a + b);
};

let id1 = setTimeout(sum, 2000, 10, 20);
clearTimeout(id1);

let minus = (a, b) => {
  console.log(a - b);
};

let id2 = setInterval(minus, 2000, 30, 20);
clearInterval(id2);
