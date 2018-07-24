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
    setInterval(function(){
          if(index >= $lisUl.length-1){
              index = -1;
          }
          index++;
          $lisUl.eq(index).stop().fadeIn().siblings().stop().fadeOut();
          $ol.children().eq(index).addClass('current').siblings().removeClass('current');
    },3000)
})