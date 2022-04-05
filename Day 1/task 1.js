/**Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, 
 * который в зависимости от числа будет выводить слово 
 * (Например, если n равно 3, то будет выводиться слово «три») */

function swithNumber(number) {

   switch (number) {
      case 0:
         console.log('zero');
         break;
      case 1: console.log('one');
         break;
      case 2: console.log('two');
         break;
      case 3: console.log('three');
         break;
      case 4: console.log('four');
         break;
      case 5: console.log('five');
         break;
      case 6: console.log('six');
         break;
      case 7: console.log('seven');
         break;
      case 8: console.log('eight');
         break;
      case 9: console.log('nine');
         break;

      default: console.log('param is out diapazone');



   }



}
swithNumber(9);
