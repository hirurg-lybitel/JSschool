/**Напишите функцию signDetermine, которая для следующих вызовов оторазит указанные результаты.
 * a и b - любые положительыне числа
 * 
 * signDetermine(-a, -b)   Both are negative
 * signDetermine(-a, b)   a is negative, b is positive
 * signDetermine(a, b)     Both are positive
 * signDetermine(a, -b)    a is positive, b is negative
*/
function signDetermine(a, b) {
   if (a > 0) {
      // console.log('Both are positive')
      if (b > 0) {
         console.log('Both are positive');

      }
      if (b < 0) {
         console.log('a is positive, b is negative');
      }
   }
   if (a < 0) {
      if (b < 0) {
         console.log('Both are negative');
      }
      if (b > 0) {
         console.log('a is negative, b is positive');
      }
   }
}
signDetermine(0, 1);