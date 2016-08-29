$(function(){
  $('.one-depth>a').on('mouseover',function(){
    $(this).parent().addClass('on').siblings().removeClass('on');
    $('.one-depth ul').hide(); 
    $(this).next().show();
  }).parent().on('mouseleave',function(){
     $(this).find('ul').hide();
     $(this).removeClass('on');
  }) 
});