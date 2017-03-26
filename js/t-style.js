

$(function () {
  $('#adx').click (function () {
    $('#ad').remove ();
  });

  $('#pages a').click (function (argument) {
    $('#forgo3').attr ('class', 'content-wrap money n' + ($(this).index () + 1));
  });
  $('a[data-forgo]').click (function () {
    $('body').stop ().animate ({ scrollTop: $('#' + $(this).data ('forgo')).offset ().top - (60) }, 1000);
    $(this).addClass ('active').parent ().siblings ().find ('a').removeClass ('active');
  });

  if ($('#tags').length)
    var tags_top = $('#tags').offset ().top;
  if ($('#tags2').length)
    var tags_top2 = $('#tags2').offset ().top;
  
  $(window).scroll (function () {
    if ($('#tags').length) {
      if (($(window).scrollTop () + 150) > tags_top) {
        $('#tags').addClass ('fix');
      } else {
        $('#tags').removeClass ('fix');
      }
    }
    if ($('#tags2').length) {
      if (($(window).scrollTop () + 105) > tags_top2) {
        $('#tags2').addClass ('fix');
      } else {
        $('#tags2').removeClass ('fix');
      }
    }

    if ($('#ad').data ('show')) {
      if ($(window).scrollTop () > $('#ad').data ('show')) {
        $('#ad').addClass ('show');
      } else {
        $('#ad').removeClass ('show');
      }
    }
  });

});




$(function () {
  var menu_top = $('.navboxs').offset ().top;
  $(window).scroll (function () {
    
    if ($(window).scrollTop () > menu_top) {
      $('.navboxs').addClass ('fix2');
    } else {
      $('.navboxs').removeClass ('fix2');
    }

    if ($('#icons').length) {
      if (!$('#icons').hasClass ('show') && ($(window).scrollTop () + $(window).height ()) > $('#icons').offset ().top) {
        $('#icons').addClass ('show');
      }
    }

    $('.item_boxs').each (function () {
      if (!$(this).hasClass ('show') && ($(window).scrollTop () + $(window).height ()) > $(this).offset ().top) {
        $(this).addClass ('show');
      }
    });
  });
  $('#play').click (function () {
    $(this).prev ().get (0).play ();
  });
});