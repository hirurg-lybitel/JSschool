/**Напишите цикл,  выводит такой треугольник:
#
##
###
####
#####
######
####### */

function getElka(count, str) {

   for (let i = 1; i <= count; i++) {

      let result = str;
      for (let j = 1; j < i; j++) {
         result += str;
      }
      console.log(result);
   }

}
getElka(7, '!');
