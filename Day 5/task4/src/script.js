function getTime() {
   let hours;
   let minutes;
   let seconds;
   let meridiem = 'AM';

   const date = new Date();
   setTimeout(getTime, 1000);
   hours = date.getHours();
   minutes = date.getMinutes();
   seconds = date.getSeconds();
   if (hours > 12) {
      meridiem = 'PM';
      hours = hours - 12;
   };

   hours = hours < 10 ? '0' + hours : hours;
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;

   document.querySelector('.hours').innerHTML = hours;
   document.querySelector('.minutes').innerHTML = minutes;
   document.querySelector('.seconds').innerHTML = seconds;
   document.querySelector('.meridiem').innerHTML = meridiem;
};

getTime();