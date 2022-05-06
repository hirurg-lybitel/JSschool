/**
  * Описание задачи: дан массив цифр от 0 до 9. Используя конструкцию switch-case, 
  *     вывести массив [0, 1, 'Два", 3, ,4 'Пять', 6, 'Семь', 8 , 9] 
*/


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = [];


for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i];
  switch (newArr[i]) {
    case 2:
      newArr[i] = 'two';
      break;
    case 5:
      newArr[i] = 'five';
      break
    case 7:
      newArr[i] = 'seven';
      break;
  }



}
console.log(newArr);

