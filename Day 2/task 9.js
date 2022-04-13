/**
  * Описание задачи: Создать функцию, которая будет создавать массив 
  * порядковых значений из указанного диапазона
  * Ожидаемый результат: (11, 16) => [11, 12, 13, 14 ,15, 16]
  * @param {number} startNum - начало диапазона
  * @param {number} endNum - конец диапазона
  * @returns {Array}
*/
function createArr(startNum, endNum) {
  let arr = [];
  
  for (let i = startNum, j = 0; i <= endNum; i++, j++) {
    arr[j] = i;
  }
  return arr;
}
console.log(createArr(11, 16))
