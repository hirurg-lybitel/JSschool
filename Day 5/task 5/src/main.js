let number = 0;
const result = document.querySelector('.result-div');
const removeClassDecr = () => {
   result.classList.add('result-div__decrease');
   result.classList.remove('result-div__reset');
   result.classList.remove('result-div__increase');
};
const removeClassReset = () => {
   result.classList.add('result-div__reset');
   result.classList.remove('result-div__decrease');
   result.classList.remove('result-div__increase');
}

const numToHtml = () => {
   document.querySelector('.result-div').innerHTML = number;
}

const decreaseNum = () => {
   if (number <= 0) {
      number = 0;
   } else {
      number = number - 1;
      numToHtml();
      removeClassDecr();
   };
};

const resetNum = () => {
   number = 0;
   numToHtml();
   removeClassReset();

}
const increaseNum = () => {
   number = number + 1;
   numToHtml();
   result.classList.add('result-div__increase');
}
document.querySelector('.low-btn').onclick = decreaseNum;
document.querySelector('.reset-btn').onclick = resetNum;
document.querySelector('.increase-btn').onclick = increaseNum;

