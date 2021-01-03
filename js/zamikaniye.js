// const sum = (num) => {
//   let value = num;
//   const fnSum = (num2) => {
//     value += num2;
//     return { value: value, s: fnSum, m: fnMinus };
//   };

//   const fnMinus = (num2) => {
//     value -= num2;
//     return { value: value, s: fnSum, m: fnMinus };
//   };
//   return { value: value, s: fnSum, m: fnMinus };
// };

// console.log(sum(1).s(2).s(3).s(15).m(5)); // 6

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Михаил", age: 22, job: "Frontend" };
const person2 = { name: "Елена", age: 19, job: "SMM" };

bind(person1, logPerson)();
bind(person2, logPerson)();

logPerson.apply(person1);

a();

 // Функция меняет значение свойства объекта //
const updatedPlayers = players.map(function (player) {
  if (player.id === playerToUpdate) {
    return {
      ...player,
      timePlayed: player.timePlayed + 50,
    };
  }
  return player;
});
