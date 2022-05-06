/**
  * Описание задачи: написать функцию, которая вернём сумму всех чисел в строке
  * Ожидаемый результат: ('1@23ab4#5') => 15
  * @param {string} str - исходная строка
  * @returns {number}
*/
const string = '1@23ab4#5';

function getSum(string) {
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    if (Number.parseInt(string[i])){
      result = result + Number(string[i]);
    }
  };
  return result;
};

console.log(getSum(string));