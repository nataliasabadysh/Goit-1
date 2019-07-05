jQuery(document).ready(function($) {
  $(document).ready(function() {
    $("#1").submit(function() {
      var formID = $(this).attr("id");
      var formNm = $("#" + formID);
      // var message = $(formNm).find(".form-message");
      // var formTitle = $(formNm).find(".form-title");
      console.log(formNm.serialize());
      $.ajax({
        type: "POST",
        url: "write.php",
        data: formNm.serialize()
        // success: function (data) {
        //   // Вывод сообщения об успешной отправке
        //   message.html(data);
        //   formTitle.css("display","none");
        //   setTimeout(function(){
        //     formTitle.css("display","block");
        //     message.html('');
        //     $('input').not(':input[type=submit], :input[type=hidden]').val('');
        //   }, 3000);
        // },
        // error: function (jqXHR, text, error) {
        //     // Вывод сообщения об ошибке отправки
        //     message.html(error);
        //     formTitle.css("display","none");
        //     setTimeout(function(){
        //       formTitle.css("display","block");
        //       message.html('');
        //       $('input').not(':input[type=submit], :input[type=hidden]').val('');
        //     }, 3000);
        // }
      });
      return false;
    });
  });
});
