/**
  * Описание задачи: имея два исходных массивы букв (строка - это тоже массив символов)
  *   upper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'    // например, upper[3] вернёт 'Г'
  *   lower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
  * написать функцию, которая будет менять регистры букв на противоположные в введённой строке
  * Ожидаемый результат: ('пРиВеТ, мИр!') => [ПрИвЕт, МиР!];
  * @param {string} str - исходная строка
  * @returns {Array}
*/

const upper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const lower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

const str = 'пРиВеТ, мИр!';

function changeRegistr(str) {
  let result = '';
  let char;

  for (let i = 0; i < str.length; i++) {
    char = str[i];

let index = upper.indexOf(char);
if (index >= 0){
  char = lower.charAt(index);
} else {
  index = lower.indexOf(char);
  if (index >= 0){
    char = upper.charAt(index);
  };    
}


    for (let j = 0; j < upper.length; j++) {
      if (char === upper[j]) {
        char = lower[j];
        break;
      }
      if (char === lower[j]) {
        char = upper[j];
        break;
      }
    }

    result = result + char;
  }
  return result;
}
console.log(changeRegistr(str));



















