$(function(){
	var n=0;
	$('.tab a').on('click',function(){
		n=$('.tab a').index($(this));
		$('.list .item').eq(n).addClass('on').siblings().removeClass('on');
		$('.tab a').eq(n).addClass('on').siblings().removeClass('on');
	});
	
	$('.controls .btn_next').on('click',function(){
		if(n>2){n=0}
		else{n=n+1;}
		
		$('.list .item').eq(n).addClass('on').siblings().removeClass('on');
		$('.tab a').eq(n).addClass('on').siblings().removeClass('on');
	})
	
	$('.controls .btn_prev').on('click',function(){
		if(n<1){n=3}
		else{n=n-1;}
		
		$('.list .item').eq(n).addClass('on').siblings().removeClass('on');
		$('.tab a').eq(n).addClass('on').siblings().removeClass('on');
	})
	
	
});