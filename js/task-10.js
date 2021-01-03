// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
import users from "./users.js";

const getSortedUniqueSkills = (users) =>
  users
    .map((user) => user.skills)
    .reduce((a, b) => a.concat(b))
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();

// твой код

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
