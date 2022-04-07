/**
  * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
  * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
  * @param {number} arraySize - размер массива
  * @param {string} value - значение для массива
  * @returns {Array}
*/


function getArr(arraySize, value) {
  const arr = [];

  for (let i = 0; i < arraySize; i++) {
    arr[i] = value;
  }
  return arr;
}

console.log(getArr(6, 'a'));


