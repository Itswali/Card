/* Card Number Spacing */

$('#card-number').on('keypress change blur', function () {
    $(this).val(function (index, value) {
      return value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
    });
  });
  
  $('#card-number').on('copy cut paste', function () {
    setTimeout(function () {
      $('#card-number').trigger("change");
    });
  });
  
  
  /* Exp. Date Slash */
  
  $('#card-exp').on('input',function(){
      var curLength = $(this).val().length;
      if(curLength === 2){
         var newInput = $(this).val();
          newInput += '/';
          $(this).val(newInput);
      }
  
  
  });
  
  // var characterCount
  // $('#card-exp').on('input',function(e){
  //     if($(this).val().length == 2 && characterCount < $(this).val().length) {
  //         $(this).val($(this).val()+'/');
  //     }
  //     characterCount = $(this).val().length
  // });