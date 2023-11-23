$(document).ready(function () {

   let reloaded = function () {
      let headerSetsCoffee = $('#header-sets-coffee');
      let headerSetsTea = $('#header-sets-tea');
      let headerSetsMan = $('#header-sets-man');
      headerSetsCoffee.addClass('beforeunload-action');
      headerSetsTea.addClass('beforeunload-action');
      headerSetsMan.addClass('beforeunload-action');
   }

   let loaded = sessionStorage.getItem('loadedCoffeePageYet');
   if (loaded) {
      reloaded();
   } else {
      sessionStorage.setItem('loadedCoffeePageYet', 'seen');
   }

   let name = document.getElementById('name');
   let company = document.getElementById('company');
   let phone = document.getElementById('phone');
   let email = document.getElementById('email');
   let message = document.getElementById('message');
   let button = document.getElementById('send-info-about-partner');

   let inputs = document.querySelectorAll('input');

   let wrapperDone = $('#wrapper-done');
   let wrapperDoneCancel = $('#wrapper-done-cancel');


   // alert(message.value);
   // message.value ? alert(message.value) : alert(1);

   inputs.forEach(function(input) {
      input.addEventListener('input', function() {
         let allInputsFilled = true;

         inputs.forEach(function(input) {
            if (input.value === '') {
               allInputsFilled = false;
            }
         });

         if (allInputsFilled) {
            button.disabled = false;
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#1F1F1F';
         } else {
            button.disabled = true;
            button.style.cursor = 'not-allowed';
            button.style.backgroundColor = '#4c4c4c';
         }
      });
   });

   if (!name.value && !company.value && !phone.value && !email.value) {
      button.style.cursor = 'not-allowed';
      button.style.backgroundColor = '#4c4c4c';
      button.disabled = true;
   }



   $('#send-info-about-partner').click(() => {

      let name = $('#name');
      let phone = $('#phone');
      let email = $('#email');
      let company = $('#company');
      let message = $('#message');
      let isMessage = "";


      if (message.val()) {
         isMessage = message.val();
      } else {
         isMessage = "отсутствует"
      }

      if (name.val() && phone.val() && email.val() && company.val() && isMessage) {
         $.ajax({
            type: 'post',
            url: 'mail.php',
            data: 'name=' + name.val() + '&phone=' + phone.val() + '&email=' + email.val() + '&company=' + company.val() + '&message=' + isMessage,
            success: () => {
               name.val('');
               phone.val('');
               email.val('');
               company.val('');
               message.val('');
               button.style.cursor = 'not-allowed';
               button.style.backgroundColor = '#4c4c4c';
               button.disabled = true;
               wrapperDone.css('display', 'flex');
            },
            error: () => {
               alert('Ошибка отправки. Свяжитесь, пожалуйста, по номеру телефона.');
            }
         });
      } else {
         alert('Заполните все данные формы');
      }

   });

   wrapperDoneCancel.click(() => {
      wrapperDone.css('display', 'none');
   });

   //

   let arrowTop = document.getElementById("arrow-top");

   window.onscroll = function() {
      showScrollBtn();
   };

   function showScrollBtn() {

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         arrowTop.style.display = "flex";
      } else {
         arrowTop.style.display = "none";
      }
   }

   arrowTop.onclick = function () {
      scrollToTop();
   }

   function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   }

});