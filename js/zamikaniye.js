const sum = (num) => {
  let value = num;
  const fnSum = (num2) => {
    value += num2;
    return { s: fnSum, value };
  };

  return { value, s: fnSum };
};

console.log(sum(1).s(2).s(3).s(15).value); // 6
