/**
  * Описание задачи: Напишите функцию, которая очищает массив
  * от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
  * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
  * @param {Array} array - Массив любых элементов
  * @returns {Array}
*/

function clearArr(array) {
  array = array.filter(n => n);
  return array;
}
console.log(clearArr([0, 1, false, 2, undefined, '', null, 3, null]));