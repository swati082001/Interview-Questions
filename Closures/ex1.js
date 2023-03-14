// function sum(a, b, c) {
//   return {
//     sumTwo: () => {
//       console.log(a + b);
//     },
//     sumThree: () => {
//       console.log(a + b + c);
//     },
//   };
// }
// let store = sum(1, 2, 3);

// console.log(store.sumTwo());
// console.log(store.sumThree());

function sum(a) {
  console.log(a);
  let c = 3;
  return function (b) {
    return a + b + c;
  };
}

let ans = sum(1);

console.log(ans(2));
