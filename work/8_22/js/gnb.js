$(function(){
  $('.one-depth>a').on('click',function(e){
    e.preventDefault();
    $('.one-depth>ul:visible').slideUp().parent().removeClass('on'); $(this).next(':hidden').slideDown().parent().addClass('on').siblings().removeClass('on');
  });
});