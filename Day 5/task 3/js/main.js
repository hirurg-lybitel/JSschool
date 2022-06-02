let seconds = 0;
let tens = 0;
let intervalId;


document.querySelector('.start-btn').onclick = () => {
   clearTimeout(intervalId);
   intervalId = setInterval(startTimer, 10);
};
const timerToHtml = () => {
   document.querySelector('.time').innerHTML = `${seconds < 10 ? ('0' + seconds) : seconds}:${tens < 10 ? ("0" + tens) : tens}`;
};

const startTimer = () => {
   tens++;
   if (tens === 100) {
      tens = 0;
      seconds++;
   };

   timerToHtml();
};

document.querySelector('.stop-btn').onclick = () => {

   clearTimeout(intervalId);
}
document.querySelector('.reset-btn').onclick = () => {
   clearTimeout(intervalId);
   seconds = 0;
   tens = 0;
   timerToHtml();
}




