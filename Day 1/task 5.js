/**Дан размер кредита (например, amount — 2 млн.руб), процентная ставка (например, percent  — 10%), 
 * кол-во лет (например, years — 5). Написать функцию, которая найдёт и вернёт переплату по кредиту. */


let calcCredit = (amount, percent, years) => {
   let per = percent / 100;
   let overpay = (amount * per) * years;
   return overpay;
}
console.log(calcCredit(100, 10, 5));

