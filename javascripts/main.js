$( document ).ready(function() {

   // var boxes = ".box-100, .box-200, .box-300, .box-400, .box-600, .box-700, .box-800"

   //  $(boxes).hide()

   //    $( ".box-500" ).click(function() {

   //      $(boxes).slideDown(2000); 
   //      $( ".box-500" ).html()
   // });

      var mn = $(".main-nav");
          mns = "main-nav-scrolled";
          hdr = $('header').height();

      $(window).scroll(function() {
        if( $(this).scrollTop() > hdr ) {
          mn.addClass(mns);
        } else {
          mn.removeClass(mns);
        }
      });

});