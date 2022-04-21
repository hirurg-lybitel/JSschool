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



let object = {
  name: 'вася',
  id: 1
};
// splice///////////
// let arr = [['her', 'pes'], 10, '34', { name: 'hui' }];

// // let removed = arr.splice(0, 2, 11, 12);
// // arr.splice(2, 0, 45);

// console.log(arr);

// slice///////////
// let array = [1, 2, 3, 4, 5];

// console.log(array.slice(1, 3));

// CONCAT////////////////////

// let arr = [1, 2];
// let arrlike = {
//   name: 'Kir',

// }
// console.log(arr.concat([3, 5], 6, 7, arrlike));

// FORAECH////////////////////////////////////////

// let arr = [1, 2, 4, 5];
// arr.forEach((item, index) => {
//   console.log(item, index);
// });


// let arus = [{ name: 'kir' }, 10, 'hui', 34];
// let someArus = arus.filter(item, index, array);
// console.log(someArus);

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, value) => sum + value);


console.log(result);
