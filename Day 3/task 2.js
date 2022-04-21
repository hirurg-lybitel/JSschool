/**
  * Описание задачи: c помощью вложенных циклов, нарисуйте строку вида
  * #_#_#_
  * #_#_#_
  * #_#_#_
  * #_#_#_
  * где #_ рисуются с помощью внутреннего цикла, а перенос строки с помощью внешнего.
*/

const str = '#';
const underscore = '_';
let result;

for (let i = 0; i < 4; i++) {
  result = '';
  for (let j = 0; j < 6; j++) {
    if (j % 2 == 0) {
      result = result + str;
    } else {
      result = result + underscore;
    }
  }
  console.log(result);
}