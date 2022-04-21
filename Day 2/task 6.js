/**
  * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
  * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
  * @param {Array} firstArray - Массив с примитивными значениями
  * @param {Array} secondArray - Массив с примитивными значениями
  * @returns {boolean}
*/

function compareArr(arr1, arr2) {
  let length = arr2.length;
  let isEqual = true;

  if (arr1.length > arr2.length) {
    length = arr1.length;
  }

  for (let i = 0; i < length; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
      break;
    }
  }  
  return isEqual;
}
let arr1 = [10, 12, 12];
let arr2 = [10, 12, 12, 13, 14];

console.log(compareArr(arr1, arr2));

// i = 0
// 10 = 10
// isEqual = true


// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
//     for (let j = 0; j < arr2.length; j++) {
//       console.log(arr2[j]);
//       if (arr1[i] === arr2[j]) {
//         console.log(true);
//       } else {
//         console.log(false);
//       }
//     }


//   }













// var thesame = (arr1.length == arr2.length) && arr1.every(function (element, index) {
//   return element === arr2[index];
// });
// console.log(thesame);
