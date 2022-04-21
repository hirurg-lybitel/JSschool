/**
  * Описание задачи: написать функцию, которая посчитает n^m (n в степени m) с помощью цикла.
  * Ожидаемый результат: (2, 10) => 1024
  * @param {number} num - число
  * @param {number} power - степень
  * @returns {number}
*/

function getGrade(n, m) {
  let result = 1;
  for (let i = 1; i <= m; i++) {

    result = result * n;


  }
  return result;




}
console.log(getGrade(5, 3));


