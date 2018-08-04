$(function(){
$('.cake-size>span').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
});
$('.twoPound').prev().click(function(){
	$('.txt>h2').text('198.00');
	$('.pc-size').text('适合2-3人食用 SIZE:15cm*4.5cm');
});
$('.twoPound').click(function(){
	$('.txt>h2').text('298.00');
	$('.pc-size').text('适合4-7人食用 SIZE:18cm*5.0cm');
});
$('.twoPound').next().click(function(){
	$('.txt>h2').text('428.00');
	$('.pc-size').text('适合8-12人食用 SIZE:22cm*5.0cm');
});
$('.amount > .plus').click(function(){
	var count = $('.many').val();
	if(count<50){
		$('.many').val(++count);
	}
});
$('.amount > .reduce').click(function(){
	var count = $('.many').val();
	if(count>1){
		$('.many').val(--count);
	}
});
$('#many').keyup(function(){
	 var val = $(this).val();
	if(val>50){
		$('.many').val(50);
	}else if(val<1){
		$('.many').val(1);
	}
});
$('#sone').mouseover(function(){
	$(this).text('Ajouter au panier').css('backgroundColor','#8B7860');
});
$('#stwo').mouseover(function(){
	$(this).text('Commander').css('backgroundColor','#8B7860');
});
$('#sone').mouseout(function(){
	$(this).text('加入购物车').css('backgroundColor','#b0916a');
});
$('#stwo').mouseout(function(){
	$(this).text('立即购买').css('backgroundColor','#b0916a');
});
$('#sone').click(function(){
	alert('已在购物车等您哦');
});
$('#stwo').click(function(){
	alert('已购买成功');
});
$('.baby-del').click(function(){
	$('.detil').css('display','block');
	$(this).css('borderTop','2px solid red');
	$('.accu-del').css('borderTop','none');
	$('.evalute').css('display','none');
});
$('.accu-del').click(function(){
	$('.evalute').css('display','block');
	$(this).css('borderTop','2px solid red');
	$('.baby-del').css('borderTop','none');
	$('.detil').css('display','none');
});

//在输入框里面发布内容让在下面显示
	var $txtarea = $('#txtarea'), $list = $('.total');
	var $beval = $('.beval');
	var $gooval = $('.gooval');
	var $badvalu = $('badvalu');
	var count = parseInt($('#numberc').text());
	$('.btn').click(function(){
		count++;
		$('#numberc').text(count);
		if($txtarea.val() ===""){
			alert("请输入评价内容");
		}else{
			$('<li>'+$txtarea.val()+'</li>').prependTo($list);
		}
		$txtarea.val("");
	});
	
	
	$('#allval').click(function(){
		$('.total').css('display','block').siblings().css('display','none');
	});
	$('#bestv').click(function(){
		$('.beval').css('display','block').siblings().css('display','none');
	});
	$('#goodv').click(function(){
		$('.gooval').css('display','block').siblings().css('display','none');
	});
	$('#badv').click(function(){
	$('.badvalu').css('display','block').siblings().css('display','none');	
	});


})
