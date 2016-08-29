$(function(){
	
	$('.tab a').on('click'function(){
		n=$('.tab a').index($(this));
			$('.list .item').ep(n).addClass('on').siblings().removeClass('on');
	});

});