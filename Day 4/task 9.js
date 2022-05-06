/**
  * Описание задачи: написать функцию, которая сравнит сумму первых трёх цифр в строке 
  *     с суммой последних трёх цифр в этой же строке и вернёт 'да' или 'нет'.
  * Ожидаемый результат: ('135647243') => 'да' // потому что 9 равно 9
  * @param {string} str - исходная строка
  * @returns {string}
*/



const str = '13564756243';
function compareSum(str) {
  return +str[0] + +str[1] + +str[2] === +str[str.length - 1] + +str[str.length - 2] + +str[str.length - 3];
}
console.log(compareSum(str));