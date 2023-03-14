let users = ["Suneet", "Swagat"];

function getUsers() {
  setTimeout(() => {
    console.log(users);
  }, 1000);
}

function addUsers(name, callBack) {
  setTimeout(() => {
    users.push(name);
    callBack();
  }, 2000);
}

addUsers("Shubham", getUsers);
