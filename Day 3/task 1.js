/**
  * Описание задачи: c помощью вложенных циклов, нарисуйте строку вида
  * ***_***_***_
  * где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.
*/

let str = '*';
let jump = '_';
let result = '';

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    result = result + str;
  }
  result = result + jump;
}

console.log(result);

