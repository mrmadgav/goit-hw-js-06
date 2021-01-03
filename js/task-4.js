import users from "./users.js";
// твой код
const getInactiveUsers = users => users.filter((user) => !user.isActive);  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

