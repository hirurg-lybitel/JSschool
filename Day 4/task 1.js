/**
  * Описание задачи: написать функцию, которая вернёт массив из n чисел Фибоначчи (каждое 
  * следующее число равно сумме двух предыдущих)
  * Ожидаемый результат: (8) => [0, 1, 1, 2, 3, 5, 8, 13];
  * @param {number} n - кол-во чисел
  * @returns {Array}
*/

function countNumbers(n) {
  const numbers = [0, 1];

  for (let i = 2; i <= n; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
  };
  return numbers;
};
console.log(countNumbers(5));