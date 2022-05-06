/**
  * Описание задачи: переменная lang может принимать два значения: 'ru' 'en'. 
  *     Написать функцию, которая используя только многомерный массив (без циклов, условий и т.п.) по полученной
  *     переменной lang вернёт массив дней недели в нужном языке.
  * Ожидаемый результат: ('en') => ['Mn', 'Ts', 'Wd', 'Th', 'Fr', 'St', 'Sn'];
  * @param {string} lang - язык
  * @returns {Array}
*/

const getDayName = (lang) => {
  const arr = [
    ['en', 'Mn', 'Ts', 'Wd', 'Th', 'Fr', 'St', 'Sn'],
    ['ru', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  ];

  const arr2 = arr.filter((item) => item[0] === lang);
  arr2[0].splice(0, 1);
  return arr2[0];
};

console.log(getDayName('en'));