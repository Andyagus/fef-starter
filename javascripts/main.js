$( document ).ready(function() {

   // var boxes = ".box-100, .box-200, .box-300, .box-400, .box-600, .box-700, .box-800"

   //  $(boxes).hide()

   //    $( ".box-500" ).click(function() {

   //      $(boxes).slideDown(2000); 
   //      $( ".box-500" ).html()
   // });

 $("#all_icons").hide();



  $('.share').click(function() {
     $("#all_icons").show(1000);
  });


    $('rect.st0').hover(function() {
        $('path#Pinterest__x28_alt_x29_').css({"fill": "#841A25"});
    });
    $('rect.st0').mouseleave(function() {
        $('path#Pinterest__x28_alt_x29_').css({"fill": ""});
    });


    $('rect.st2').hover(function() {
        $('path#Twitter__x28_alt_x29_').css({"fill": "#54888E"});
    });
    $('rect.st2').mouseleave(function() {
        $('path#Twitter__x28_alt_x29_').css({"fill": ""});
    });


    $('rect.st3').hover(function() {
        $('path#Facebook__x28_alt_x29__1_').css({"fill": "#283D63"});
    });
    $('rect.st3').mouseleave(function() {
        $('path#Facebook__x28_alt_x29__1_').css({"fill": ""});
    });


    $('rect.st4').hover(function() {
      $('path#Google').css({"fill": "#8D291D"});
      $('path.st5').css({"fill": "#8D291D"});
    });


    $('rect.st4').mouseleave(function() {
      $('path#Google').css({"fill": ""});
      $('path.st5').css({"fill": ""});
    });


    $('rect.st6').hover(function() {
      $('polygon.st1').css({"fill": "#367D6F"});
    });

    $('rect.st6').mouseleave(function() {
      $('polygon.st1').css({"fill": ""});
    });


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



// Navigation bottom bar
      $('.nav2 .selected_nav').hide();
      $('.nav3 .selected_nav').hide();
      $('.nav4 .selected_nav').hide();
      $('.nav5 .selected_nav').hide(); 

       $( '.nav1' ).click(function() {
        $('.selected_nav').hide()
        $( '.nav1 .selected_nav' ).show()
   });


       $( '.nav2' ).click(function() {
        $('.selected_nav').hide()
        $( '.nav2 .selected_nav' ).show()
   });

        $( '.nav3' ).click(function() {
        $('.selected_nav').hide()
        $( '.nav3 .selected_nav' ).show()
   });

        $( '.nav4' ).click(function() {
        $('.selected_nav').hide()
        $( '.nav4 .selected_nav' ).show()
   });

          $('.page-navigation').onePageNav();


// ToolTip!


   
});