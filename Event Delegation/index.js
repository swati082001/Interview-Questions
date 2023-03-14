document.getElementById("grandparent").addEventListener(
  "click",
  (event) => {
    if (event.target.id === "child") {
      console.log("Child got clicked");
    } else if (event.target.id === "parent") {
      console.log("Parent got clicked");
    } else if (event.target.id === "grandparent") {
      console.log("Grandparent got clicked");
    }
  },
  false
);

// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent got clicked");
//   },
//   false
// );

// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("Child got clicked");
//   },
//   false
// );
