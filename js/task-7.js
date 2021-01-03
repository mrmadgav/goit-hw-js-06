import users from "./users.js";

function calculateTotalBalance(arr) {
  const total2 = arr.reduce(function (balance, user) {
    return balance + user.balance;
  }, 0);
  return total2;
}
console.log(calculateTotalBalance(users)); // 20916
