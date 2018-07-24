$(function () {
	$('.cake-size>span').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('.twoPound').prev().click(function () {
		$('.txt>h2').text('198.00');
		$('.pc-size').text('适合2-3人食用 SIZE:15cm*4.5cm');
	});
	$('.twoPound').click(function () {
		$('.txt>h2').text('298.00');
		$('.pc-size').text('适合4-7人食用 SIZE:18cm*5.0cm');
	});
	$('.twoPound').next().click(function () {
		$('.txt>h2').text('428.00');
		$('.pc-size').text('适合8-12人食用 SIZE:22cm*5.0cm');
	});
	// $many[0].value>50 ? 50 : $many[0].value
	// $many[0].value<1 ? 1 :$many[0].value
	$('.amount > .plus').click(function () {
		var count = $('.many').val();
		if (count < 50) {
			$('.many').val(++count);
		}
	});
	$('.amount > .reduce').click(function () {
		var count = $('.many').val();
		if (count > 1) {
			$('.many').val(--count);
		}
	});
	$('#sone').mouseover(function () {
		$(this).text('Ajouter au panier').css('backgroundColor', '#8B7860');
	})
	$('#stwo').mouseover(function () {
		$(this).text('Commander').css('backgroundColor', '#8B7860');
	})
	$('#sone').mouseout(function () {
		$(this).text('加入购物车').css('backgroundColor', '#b0916a');
	})
	$('#stwo').mouseout(function () {
		$(this).text('立即购买').css('backgroundColor', '#b0916a');
	})
	$('#sone').click(function () {
		alert('已在购物车等您哦');
	})
	$('#stwo').click(function () {
		alert('已购买成功');
	})
	$('.baby-del').click(function () {
		$('.detil').css('display', 'block');
		$('.evalute').css('display', 'none');
	})
	$('.accu-del').click(function () {
		$('.evalute').css('display', 'block');
		$('.detil').css('display', 'none');
	})


})