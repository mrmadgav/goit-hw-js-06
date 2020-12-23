import users from './users.js';
console.log(users);

const getUserNames = (users) => {
  // твой код
  users.map((user) => user.name);
};

console.log(getUserNames(users));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// /*
//  * Фильтруем четные числа. Далее, на результате метода filter,
//  * вызываем map и множим на 2. После чего на результате
//  * метода map вызываем reverse.
//  */

// const result = numbers
//   .filter((x) => x % 2 === 0)
//   .map((y) => y * 2)
//   .reverse();
// const result2 = numbers
//   .filter((x) => x % 2 === 1)
//   .reduce((acc, value) => acc * value, 1);
// console.log(result);
// console.log(result2);

// let objHash = {
//   object1: { name: "Mango" },
//   object2: { name: "Poly" },
//   object3: { name: "Ajax" },
//   object4: { name: "Elma" },
// };
// let nameIndex = { abc: objHash.object1, 1: objHash.object4 };

// console.dir({
//   objHash: objHash,
//   nameIndex: nameIndex,
// });

// nameIndex["1"].name = "mno";

// console.dir({
//   objHash: objHash,
//   nameIndex: nameIndex,
// });
