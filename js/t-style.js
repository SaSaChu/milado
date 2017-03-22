/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
  $('#pages a').click (function (argument) {
    $('#money-viedos').attr ('class', 'content-wrap money n' + ($(this).index () + 1));
  });
});