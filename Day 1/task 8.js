/**Напишите функцию которая возвращает сумму всех чисел из заданного произвольного диапазона. */

function sumRangeNumbers(from, to) {
   let result = 0;
   let param = 'задай параметры';

   if (!from || !to) {
      return param;
   }

   for (let i = from; i <= to; i++) {
      result = result + i;
   }

   return result;
}
console.log(sumRangeNumbers(1));