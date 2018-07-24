$(function() {
    //App下载鼠标 显示二维码
    $('.first').mouseenter(function () {
        $(this).children('img').stop().slideDown();
    })
    $('.first').mouseleave(function () {
        $(this).children('img').stop().slideUp();
    })
    //设置slider的背景图
    var $lisSli = $('.slider  li');
    for (var i = 0; i < $lisSli.length; i++) {
        $($lisSli[i]).css({
            backgroundImage: 'url(./images/' + (i + 1) + '.jpg)',
            height: 480,
        })
    }
    //地区选择 
    $('.area-choose').mouseover(function () {
        $(this).find('ul').stop().slideDown();
    })
    $('.area-choose').mouseout(function () {
        $(this).find('ul').stop().slideUp();
    })
    //area-choose的替换 
    // var $lis1 = $('.area-choose li');
    // console.log($lis1)
    // $lis1.each(function(i,ele){
    //     ele.click(function(){
    //         console.log('aaa')
    //          $('.area-choose span').text($(this).children().text());
    //     })
    // })
    var location=$('.area-choose span'),lis=$('.area-choose li');
    $('.area-choose ul').on('click','li',function(){
        location.text($(this).children().text());
    })
        var weibo = document.getElementsByClassName('weibo');
        var wechat = document.getElementsByClassName('wechat');
        var app = document.getElementsByClassName('app');
        var firstLi = document.getElementsByClassName('first-li'); // 头部top的app下载元素
        var picWe = document.getElementById('pic-we');
        var picWx = document.getElementById('pic-wx');
        var picApp = document.getElementById('pic-app');
        var dowloadApp = document.getElementById('dowload-app'); //头部app下载的悬停出现的图片
        weibo[0].onmouseover = function () {
            picWe.style.display = 'block';
        };
        weibo[0].onmouseout = function () {
            picWe.style.display = 'none';
        }
        wechat[0].onmouseover = function () {
            picWx.style.display = 'block';
        };
        wechat[0].onmouseout = function () {
            picWx.style.display = 'none';
        }
        app[0].onmouseover = function () {
            picApp.style.display = 'block';
        };
        app[0].onmouseout = function () {
            picApp.style.display = 'none';
        }
  // 手风琴效果开始
  	var $lis = $('#list>li');
  	$lis.mouseenter(function () {
		var index = $(this).index();
  		$lis.each(function (i, e) {
  			if (i <= index) {
  				$(e).stop().animate({left : i * 260});
  			} else {
  				$(e).stop().animate({left : i * 260 + 160});
  			}		
  		});
  	});

  	$('#box').mouseleave(function () {
  		$lis.each(function (i, e) {
  			$(e).stop().animate({left : i * 300});
  		});
  	});
     // 手风琴效果结束
});
