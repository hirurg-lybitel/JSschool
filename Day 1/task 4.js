/**Напиши скрипт, который находит и возвращает объем 
 * цилиндра высотой height и диаметром основания d. */

function calcVolume(h, d) {
   let r = d / 2;
   let volume = Math.PI * r * r * h;
   if (!h || !d) {
      return 0;
   }
   return volume.toFixed(2);
}

console.log(calcVolume(3.34, 4.6789));