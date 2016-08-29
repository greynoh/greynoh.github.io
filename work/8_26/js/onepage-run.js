$(function(){
  var posY=[0,500,1100,1675,2075]
  
  $('.gnb a').on('click',function(e){
    e.preventDefault();
    idx=$('.gnb a').index($(this));
    $('.gnb li').eq(idx).addClass('on').siblings().removeClass('on');
    $('html,body').animate({
      scrollTop:posY[idx]
    });
  });
  
  $(window).scroll(function(){
    if($(window).scrollTop()>=500 && $(window).scrollTop()<1100){
      $('.gnb li').eq(1).addClass('on').siblings().removeClass('on');
    }
    else if($(window).scrollTop()>=1100 && $(window).scrollTop()<1675){
      $('.gnb li').eq(2).addClass('on').siblings().removeClass('on');
    }
    else if($(window).scrollTop()>=1675 && $(window).scrollTop()<2075){
      $('.gnb li').eq(3).addClass('on').siblings().removeClass('on');
    }
    else if($(window).scrollTop()>=2075){
      $('.gnb li').eq(4).addClass('on').siblings().removeClass('on');
    }
    else{
      $('.gnb li').eq(0).addClass('on').siblings().removeClass('on');
    }
  })
});









