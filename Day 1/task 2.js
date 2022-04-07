/**Написать функцию, которая, которая принимает переменные size и unit. 
 * В них хранятся размер и единицы измерения информации соответственно (например, 120 и «Кб» ). 
 * Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) и 1килобайт равен 1024 байта, 
 * вычислить и вернуть количество байт в size и вывести в консоль.
 */


// unit: [byte, Kb, Mb, Gb]


function calcSize(size = 0, unit) {

   let number = size;

   function getNumber(num, degree) {
      return num * 1024 ^ degree;
   };

   if (unit === 'Kb') {
      number = getNumber(number, 1);
   }
   if (unit === 'Mb') {
      number = getNumber(number, 2);
   }
   if (unit === 'Gb') {
      number = getNumber(number, 3);
   }
   if (!unit) {
      number = -1;
   }

   return number;
}


const result = calcSize(120, 'Mb');
console.log(`amount of bytes is ${result}`);
