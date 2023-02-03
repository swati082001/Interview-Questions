function sum(a, b, c) {
  return {
    sumTwo: () => {
      console.log(a + b);
    },
    sumThree: () => {
      console.log(a + b + c);
    },
  };
}
let store = sum(1, 2, 3);

console.log(store.sumTwo());
console.log(store.sumThree());
