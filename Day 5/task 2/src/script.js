const db_comments = [
   { name: '@Vasia', time: '12.45', text: 'Класс', date: '04.11.2022' },
   { name: '@Petr', time: '12.50', text: 'Сас', date: '05.11.2022' },
   { name: '@Kirill', time: '12.52', text: 'Сасайте', date: '06.11.2022' },
   { name: '@Yra', time: '12.54', text: 'Смерть ему', date: '07.11.2022' },
];

const setComments = (com) => {
   if (!com || !(com.length > 0)) {
      document.getElementById("comm").innerHTML = "";
      return;
   };

   const comments = com.map((comment, index) => {
      return (
         `<li class="comment__list_li">
            <div class="comment__inner">                                
            <p class="comment__list_p1">${comment.name}</p>
            <p class="comment__list_p comment__list_time">${comment.time}</p>
            <p class="comment__list_p comment__list_time">${comment.date}</p>
            </div>                   
            <div class="comment-text" id="comment-text${index}">
               <p class="comment__list_p">${comment.text}</p>
               <input class="input-redact" type="button" value="Редактировать" id="input-redact${index}" onclick="editComment(${index})">
            </div>
            <input class="input" type="button" value="Х" id=${index} onclick="deleteComment(${index})">
         </li>`
      );
   });

   let result = '';
   for (let i = 0; i < comments.length; i++) {
      result += comments[i];
   };

   document.getElementById("comm").innerHTML = '<ul class="comments">' + result + '</ul>';
};

document.getElementById("comm").innerHTML = '';

document.getElementById("top1").onclick = () => {
   if (document.getElementById("comm").innerHTML === '') {
      setComments(db_comments);
      return;
   };

   document.getElementById("comm").innerHTML = '';
};


const deleteComment = (deleteIndex) => {
   db_comments.splice(deleteIndex, 1);

   setComments(db_comments);
};

function clearAllComments() {
   const newdbComments = [];
   setComments(newdbComments);
};

function addComment() {

   let inp = document.getElementById("writeText");
   if (inp.value === '') {
      alert('введите комментарий!');
      return;
   }
   const user = {
      name: 'AssGod',
      time: new Date().toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' }),
      text: inp.value,
      date: new Date().toLocaleDateString(),
   }

   db_comments.push(user);
   setComments(db_comments);
};


function editComment(idx) {
   document.querySelector(`#comment-text${idx}`).innerHTML = `
      <input type="text" class="editComment" id="insertEditText${idx}" value="${db_comments[idx].text}">
      <div>
         <input class="input-redact" type="button" value="Сохранить" onclick="saveText(${idx})">
         <input class="input-redact" type="button" value="Отменить" onclick="cancel()">
      </div>`

};

function saveText(idx) {
   let inp = document.querySelector(`#insertEditText${idx}`);
   if (inp.value === '') {
      alert('Введите комментарий');
      return;
   }
   db_comments[idx].text = inp.value;
   db_comments[idx].time = new Date().toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });
   db_comments[idx].date = new Date().toLocaleDateString();
   setComments(db_comments);
};

function cancel() {
   setComments(db_comments);
};