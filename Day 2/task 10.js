/**
  * Описание задачи: дан объект {php: 'hello', css: 'world', price: 111.11, js:['jQuery', 'Angular', 'React']}. 
  * Выведите с его помощью слово 'Angular'.  
  * Ожидаемый результат: 'Angular'
*/

let search = 'Angular';
let obj = { 
  php: 'hello', 
  css: 'world', 
  price: 111.11, 
  js: ['jQuery', 'Angular', 'React']
};

for (key in obj) {
  let value = obj[key];
  if (Array.isArray(value)) {
    for (let j = 0; j < value.length; j++) {
      if (value[j] == search) {
        console.log(search);
        break;
      }
    }
  }
}
