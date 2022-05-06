/**
  * Описание задачи: написать функцию, которая принимает два аргумента и сравнивает их.
  * Ожидаемый результат: 
  *     ('test', 1) => 'Не равны'
  *     (1, 1) => 'Равны'
  *     ('1', 1) => 'Почти равны'
  * @param {any} n - первый параметр любого типа (string или number)
  * @param {number} m - число, с которым сравниваем
  * @returns {string}
*/
function compareN(n, m) {
  if (Number.isNaN(+n)) {
    return 'не равны';
  };

  if (n === m) {
    return 'равны';
  }

  return 'почти равны';
};

console.log(compareN('1', 1));
console.log(compareN(1, 1));
console.log(compareN('test', 1));

