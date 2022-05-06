/**
  * Описание задачи: дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if 
  *     выведите на экран те элементы массива, которые больше 3, но меньше 10.
*/
const arr = [2, 5, 9, 15, 'hui', 0, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   };
// };

const newArr = arr.filter(item => item > 3 && item < 10);

console.log(newArr);