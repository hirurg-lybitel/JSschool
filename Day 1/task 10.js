/**
  * Описание задачи: напишите функцию, которая с помощью двух вложенных циклов выведите на экран 
  * строку из n повторяющихся чисед диапазона
  * Ожидаемый результат: (1, 9, 3) => '111222333444555666777888999'
  * @param {number} start - начало диапазона
  * @param {number} end - конец диапазона
  * @param {number} count - количество повторений
  * @returns {string}
*/

let getNumber = (start, end, count) => {
  let result = '';
  for (let i = start; i <= end; i++) {
    for (let j = 1; j <= count; j++) {
      result = result + i;
    }
  }
  return result;
}
console.log(getNumber(1, 5, 3));