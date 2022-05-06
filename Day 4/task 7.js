/**
  * Описание задачи: написать функцию, которая по номеру месяца определит пору года
  * Ожидаемый результат: (4) => 'Весна'
  * @param {number} month - номер месяца
  * @returns {string}
*/


function getSeason(number) {
  if (number > 0 && number <= 2 || number === 12) {
    return 'Winter';
  };
  if (number >= 3 && number <= 5) {
    return 'Spring';
  };
  if (number >= 6 && number <= 8) {
    return 'Summer';
  }
  if (number <= 0 || number > 12) {
    return 'neverno';
  }
  else {
    return 'Fall';
  };

};

console.log(getSeason(0));