let count = 0;
function getData() {
  console.log("hitting" + count++);
}

function debounce(call, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      call();
    }, delay);
  };
}

let betterFunction = debounce(getData, 1000);
