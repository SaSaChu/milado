

$(function () {
  $('#pages a').click (function (argument) {
    $('#forgo3').attr ('class', 'content-wrap money n' + ($(this).index () + 1));
  });
  $('a[data-forgo]').click (function () {
    $('body').stop ().animate ({ scrollTop: $('#' + $(this).data ('forgo')).offset ().top - (60) }, 1000);
  });
});