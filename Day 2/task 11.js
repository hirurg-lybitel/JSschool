/**
  * Описание задачи: создайте массив объектов дней недели с номером дня от начала 
  * недели и наименование дня, например, { id: 2, name: 'Вторник'}.
  * создайте функцию, которая по номеру дня недели вернёт его наименование.
  * Ожидаемый результат: (2) => 'Вторник'
  * @param {number} day - номер дня недели
  * @returns {string}
*/

const week = [
  { id: 1, name: 'Понедельник' },
  { id: 5, name: 'Пятница' },
  { id: 2, name: 'Вторник' },
  { id: 6, name: 'Суббота' },
  { id: 3, name: 'Среда' },
  { id: 7, name: 'Воскресенье' },
  { id: 4, name: 'Четверг' }
];

function getDays(day) {
  for (let i = 0; i < week.length; i++) {
    if (week[i].id === day) {
      return week[i].name;
    };
  };
};

console.log(getDays(4));