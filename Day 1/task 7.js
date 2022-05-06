/**Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них. */

function calcMin(a, b) {

   if (a > b) {
      return b;
   }
   if (b > a) {
      return a;
   }
   if (a === b) {
      return a;
   }

   if (!b) {
      return a;
   }
   if (!a && !b) {
      return a;
   }
}
console.log(calcMin(3, 2));