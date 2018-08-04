$.fn.tab = function () {
	var $spans = this.find('.title');

	var $lis = this.find('.single');

	// 给span添加事件
	$spans.on('click', function () {
		// $().addClass('current').siblings().removeClass('current');
		// $lis.eq($(this).index()).addClass('show').siblings()
		// .removeClass('show');
		$('.goods-single').children().addClass('show').siblings().removeClass('show');
		return false;
	});
};