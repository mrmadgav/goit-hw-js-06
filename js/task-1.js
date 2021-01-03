import users from "./users.js";
// твой код
const getUserNames = (users) => users.map((user) => user.name);
console.log(getUserNames(users));
