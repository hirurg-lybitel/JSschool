/**
  * Описание задачи: используя вложенные циклы создайте таблицу умножения от 1 до 10.
  * Т.е. вначале столбец 1x1, 1x2...1x10 потом 2x1, 2x2 ... 2x10 и так далее.
  * Оформить в виде столбцов где выводятся множители и результат.
*/


const table = [];

// { multiply1: 1, multiply2: 2, result: 2 };
for (let i = 1; i <= 10; i++) {



  for (let j = 1; j <= 10; j++) {

    table.push({
      multiply1: i,
      multiply2: j,
      result: i * j,

    });
  };
  table.push({});


};

console.table(table);