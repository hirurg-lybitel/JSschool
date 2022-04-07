/**
  * Описание задачи: c помощью двух вложенных циклов выведите на экран строку '11 12 13 21 22 23 31 32 33'
*/

// 11 12 13 
// 21 22 23 
// 31 32 33
const start = 1;
let str = '';
const end = 3;

for (let i = start; i <= end; i++) {
  for (let j = 1; j <= 3; j++) {
    str = str + i + j + ' ';

  }
}
console.log(str);