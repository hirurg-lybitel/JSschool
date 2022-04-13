/**
  * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
  * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
  * @param {Array} firstArray - Массив с примитивными значениями
  * @param {Array} secondArray - Массив с примитивными значениями
  * @returns {boolean}
*/
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 4];


var thesame = (arr1.length == arr2.length) && arr1.every(function (element, index) {
  return element === arr2[index];
});
console.log(thesame);
