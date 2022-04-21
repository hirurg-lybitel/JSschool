/**
  * Описание задачи: написать функцию, которая используя цикл вернёт n первых элементов массива
  * Ожидаемый результат:
  *     ([1,2,3,4,5,6,7,8,9], 4) => [1,2,3,4];
  *     ([1,2,3,4,5,6,7,8,9]) => [1];
  * @param {Array} array - иходный массив
  * @param {number} count - кол-во символов
  * @returns {Array}
*/


let newArr = [];

function returnN(arr, n = 4) {


  for (let i = 0; i < n; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
};
console.log(returnN(['hui', 2, 'hui', 12, 13, 14, 7]));


