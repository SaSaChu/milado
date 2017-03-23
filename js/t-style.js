

$(function () {
  $('#pages a').click (function (argument) {
    $('#forgo3').attr ('class', 'content-wrap money n' + ($(this).index () + 1));
  });
  $('a[data-forgo]').click (function () {
    $('body').stop ().animate ({ scrollTop: $('#' + $(this).data ('forgo')).offset ().top - (60) }, 1000);
    $(this).addClass ('active').parent ().siblings ().find ('a').removeClass ('active');

  });

  var tags_top = $('#tags').offset ().top;
  
  $(window).scroll (function () {
    if (($(window).scrollTop () + 150) > tags_top) {
      $('#tags').addClass ('fix');
    } else {
      $('#tags').removeClass ('fix');
    }
    if ($('#ad').data ('show')) {
      if ($(window).scrollTop () > $('#ad').data ('show')) {
        $('#ad').addClass ('show');
      } else {
        $('#ad').removeClass ('show');
      }
    }
  });
  // $('#viedos .viedo .obj').click (function () {
    
  // });
});