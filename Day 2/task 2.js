/**
  * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
  * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
  * @param {Array} array - Массив любых элементов
  * @returns {Array}
*/
function returnArr(array) {
  const reversedArr = [];
  for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
    reversedArr[j] = array[i];
  }
  return reversedArr;
}
console.log(returnArr([4, 5, 6]));
