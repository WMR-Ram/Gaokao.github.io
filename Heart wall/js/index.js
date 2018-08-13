$(function () {
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
            height: 520,
        })
    }
    //购物车
    // 需求：当点击addcar的时候，购物车数字加
    var count = 0;
    $('.right-b').click(function(){
        count++;
        $('.count').css('display','block')
        $('.count').html(count);
        

    })
    

    //地区选择 
    $('.area-choose').mouseover(function () {
        $(this).find('ul').stop().slideDown();
    })
    $('.area-choose').mouseout(function () {
        $(this).find('ul').stop().slideUp();
    })
    //设置地区选择效果
    var location=$('.area-choose span'),lis=$('.area-choose li');
    $('.area-choose ul').on('click','li',function(){
        location.text($(this).children().text());
    })
})
//小圆点
$(function(){
    var $lisUl = $('.slider ul li');
    var $ol = $('.slider ol')
    $lisUl.each(function(){
    $('<li></li>').appendTo($ol);
    })
    //设置默认样式
    $ol.children()[0].className = 'current';
    var index = 0;
    //设置小圆点和背景图片的联动效果。做联动效果的时候，首先要声明一个共同的值
    //让两个的索引值是一样的，设置点击小圆点，与图片相同
    $ol.on('click','li',function(){
        index = $(this).index();
       $lisUl.eq(index).stop().fadeIn().siblings().stop().fadeOut();
       $(this).addClass('current').siblings().removeClass('current');
    })
    //设置Interval 
    var timer = null;
    var timerfunc = function(){
         timer = setInterval(function(){
          if(index >= $lisUl.length-1){
              index = -1;
          }
          index++;
          $lisUl.eq(index).stop().fadeIn().siblings().stop().fadeOut();
          $ol.children().eq(index).addClass('current').siblings().removeClass('current');
     },2000)
    }
    timerfunc();
    $('.slider>ul').mouseenter(function(){
        clearInterval(timer);
    })
    $('.slider>ul').mouseleave(function(){
      timerfunc();
    })

//点击up按钮回到顶部事件
$(window).on('scroll',function(){
    var len = $(this).scrollTop();//没单位好比较
    if(len>=700){
        $('#up').show()
    }else{
        // $('side-nav').hide();
        $('#up').hide();
    }
})
$('#up').click(function(){
    $('body,html').animate({scrollTop:0})
})
$('#up img').on('mouseenter',function(){
    $('#up span').stop().show();
})
$('#up img').on('mouseleave',function(){
    $('#up span').stop().hide();
})
//侧边栏出现
$(window).on('scroll',function(){
    var len = $(this).scrollTop();//没单位好比较
    if(len>=700&&len<=3600){
        $('#side-nav').show()
    }else{
        $('#side-nav').hide();
    }
})
// $('#side-nav ul').on('click','li',function(){
//     $('.new-product').css('margin-top',44);
// })
// 导航栏固定定位
$(function () {
    // 1 当浏览器的滚动条滚动时，检测卷曲的顶部距离
    $(window).scroll(function () {
      // 2 当卷曲的距离大于了顶部盒子的高度，设置定位即可(类名设置方式)
      if ($(this).scrollTop() > $('#header').height()+$('.slider').height()) {
        // 3 设置定位
        $('#header').addClass('fixed');
        // 4 为了解决定时脱标的问题，可以给底部盒子添加marginTop
        $('.w2').css('marginTop', $('#header').height() + 10);
      } else {
        $('#header').removeClass('fixed');
        $('.w2').css('marginTop', 10);
      }
    })
  })

})
//加入购物车细节图
$(function(){
    
    //点击效果 ，转换
    
   $('.spec-info').on('click','a',function(){
    $('.spec-title').html($(this).data('price'))
       $(this).children('i').addClass('db').parent().siblings().children('i').removeClass('db');
   })
   //内容
   $('.spec-title').html($('.price').html());
   //当点击加入购物车时候显示spec-detail的盒子的类名为db
   $('.addcar').click(function(){
       $(this).parent().siblings('.spec-detail').removeClass('dn').addClass('db');
   })
   //当点击第二个页面加入购物车按钮时候显示第三张同时购物车数量增加
   $('.right-b').click(function(){
      var $fin=$(this).parents('.spec-detail').next()
     $fin.removeClass('dn').addClass('db'); 
       setTimeout(function(){
         $fin.addClass('dn').removeClass('db');
         $fin.siblings('.spec-detail').addClass('dn').removeClass('db')
      },1000)
   })




})
