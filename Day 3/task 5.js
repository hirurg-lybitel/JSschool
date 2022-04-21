/**
  * Описание задачи: имея два исходных массивы букв (строка - это тоже массив символов)
  *   upper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'    // например, upper[3] вернёт 'Г'
  *   lower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
  * написать функцию, которая будет менять регистры букв на противоположные в введённой строке
  * Ожидаемый результат: ('пРиВеТ, мИр!') => [ПрИвЕт, МиР!];
  * @param {string} str - исходная строка
  * @returns {Array}
*/

// const upper = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
// const lower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

// const str = 'пРиВеТ, мИр!';

// function changeRegistr(str) {
//   let result = '';
//   let char;

//   for (let i = 0; i < str.length; i++) {
//     char = str[i];

// let index = upper.indexOf(char);
// if (index >= 0){
//   char = lower.charAt(index);
// } else {
//   index = lower.indexOf(char);
//   if (index >= 0){
//     char = upper.charAt(index);
//   };    
// }


//     for (let j = 0; j < upper.length; j++) {
//       if (char === upper[j]) {
//         char = lower[j];
//         break;
//       }
//       if (char === lower[j]) {
//         char = upper[j];
//         break;
//       }
//     }

//     result = result + char;
//   }
//   return result;
// }
// console.log(changeRegistr(str));



// *****
// ****
// ***
// **
// *
// function getElka(n, str) {

//   for (let i = 1; i <= n; i++) {

//     let result = str;
//     for (let j = n; j > i; j--) {
//       result += str;
//     }
//     console.log(result);
//   }

// }
// getElka(5, '*');



let number = [1, 2, 3, 4, 5];
let newNumber = [];

for (let i = 0; i < number.length; i++) {
  newNumber.push(number[i] * 2);
}

console.log(newNumber);















// let arr = [1, 2, 'loh', 4, 'Vitia', 6, 7];
// for (let item of arr) {
//   console.log(item);
// }
// for (let i = 0; i < arr.length; i++) {

//   console.log(arr[i]);
// }

// for (let ind in arr) {
//   console.log(arr[ind]);
// }



// arr.forEach((item, index, array) => console.log(item, index, array));

let names = ['vLaDiMir', 'sASHA', 'PeTr'];
// for (let i = 0; i < names.length; i++) {
//   names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();

// }
// console.log(names);

// names.forEach((item, i, arr) => {
//   arr[i] = item[0].toUpperCase() + item.slice(1).toLowerCase();
// });

// correctNames = names.map(function (item) {
//   return item[0].toUpperCase() + item.slice(1).toLowerCase()
// });
// console.log(correctNames);

// let mix = ['spspsp', 1, 2, 'Petr', 5, 'sasha', '15'];
// let newMix = [];
// for (let i = 0; i < mix.length; i++) {
//   if (typeof mix[i] === 'string' && isNaN(mix[i])) {
//     newMix.push(mix[i]);
//   }
// }
// console.log(newMix);

// let filterWords = mix.filter((item) => {
//   return typeof item === 'string' && isNaN(item)
// });
// console.log(filterWords);

// let filterWords = mix.filter((item) => typeof item === 'string' && isNaN(item));
// console.log(filterWords);

// let numbers = [1, -1, 2, -2, 3, -3, 4, -4];
// let positiveNums = numbers.filter((item) => {
//   if (item > 0) {
//     return item;
//   }
// });
// console.log(positiveNums);

// let positiveNums = numbers.filter((item) => item > 0);
// console.log(positiveNums);


// console.log(result);
// let numers = ['spspsp', 1, 2, 'Petr', 5, 'sasha', '15'];
// for (let i = 0; i < numers.length; i++) {
//   if (typeof numers[i] === 'number') {
//     result = true;
//     break;
//   }
// }
// console.log(result);

// let result2 = numers.some((item) => typeof item === 'number');
// console.log(result2);

// let sums = [1, 2, 3, 4, 5];

// let result = 0;
// for (let i = 0; i < sums.length; i++) {
//   result = result + sums[i];
// }
// console.table({ result: result });


// let result2 = sums.reduce(function (accumulator, item) {
//   return accumulator + item;
// }, 1);
// console.log(result2);
// есть еще reduceRight справа налево

// let hui = [[1, 2], [3, 4], [5, 6]];
// const res = hui.reduceRight((acc, item) => acc.concat(item), []);
// console.log(res);

