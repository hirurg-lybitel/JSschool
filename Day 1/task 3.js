/**Напишите скрипт, который находит и возвращает площадь 
 * прямоугольника высотой height и шириной width.
 * Если не задан один из параметров или не заданы оба, то пусть -1 возвращает */

function getSquare(height, width) {
   if (!height || !width) {
      return;
   }
   return height * width;
}
console.log(getSquare(3, 6));


function getArr(size, value) {
   let arr = [];
   for (let i = 1; i <= size; i++) {
      arr[i] = value;
   }
   return arr;
}

console.log(getArr(5, 'hui'));