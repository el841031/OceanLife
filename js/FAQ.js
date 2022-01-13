$(document).ready(function () {

  // (QA摺疊選單)
  $('.collapsible').click(function () {
    $(this).toggleClass('active');
    $(this).siblings().slideToggle();
  });

});