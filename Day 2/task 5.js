/**
  * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
  * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
  * @param {Array<string | number>} array - Массив с примитивными значениями
  * @returns {Array}
*/

const array = [1, 2, 3, 1, 2, 2, 3, 5];

const array_2 = array.filter((item, index) => {
  return array.indexOf(item) === index;
});

console.log(array_2);